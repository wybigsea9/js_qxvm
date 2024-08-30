# -*- coding: utf-8 -*-

import cv2
import numpy as np


class GapLocater:

    def __init__(self, gap, bg):
        """
        init code
        :param gap: 缺口图片
        :param bg: 背景图片
        """
        self.gap = gap
        self.bg = bg

    async def clear_white(self, img):
        """
        清除图片的空白区域，这里主要清除滑块的空白
        :param img:
        :return:
        """
        img = cv2.imdecode(np.frombuffer(img, np.uint8), cv2.IMREAD_COLOR)
        rows, cols, channel = img.shape
        min_x = 255
        min_y = 255
        max_x = 0
        max_y = 0
        for x in range(1, rows):
            for y in range(1, cols):
                t = set(img[x, y])
                if len(t) >= 2:
                    if x <= min_x:
                        min_x = x
                    elif x >= max_x:
                        max_x = x

                    if y <= min_y:
                        min_y = y
                    elif y >= max_y:
                        max_y = y
        img1 = img[min_x: max_x, min_y: max_y]
        return img1

    async def template_match(self, tpl, target):
        """
        背景匹配
        :param tpl:
        :param target:
        :return:
        """
        th, tw = tpl.shape[:2]
        result = cv2.matchTemplate(target, tpl, cv2.TM_CCOEFF_NORMED)
        # 寻找矩阵(一维数组当作向量,用Mat定义) 中最小值和最大值的位置
        min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(result)
        tl = max_loc
        br = (tl[0] + tw, tl[1] + th)
        # 绘制矩形边框，将匹配区域标注出来
        # target：目标图像
        # tl：矩形定点
        # br：矩形的宽高
        # (0, 0, 255)：矩形边框颜色
        # 1：矩形边框大小
        cv2.rectangle(target, tl, br, (0, 0, 255), 2)
        return tl

    async def image_edge_detection(self, img):
        """
        图像边缘检测
        :param img:
        :return:
        """
        edges = cv2.Canny(img, 100, 200)
        return edges

    async def run(self, is_clear_white=False):
        if is_clear_white:
            img1 = await self.clear_white(self.gap)
        else:
            img1 = cv2.imdecode(np.frombuffer(self.gap, np.uint8), cv2.IMREAD_COLOR)
        img1 = cv2.cvtColor(img1, cv2.COLOR_RGB2GRAY)
        slide = await self.image_edge_detection(img1)

        back = cv2.imdecode(np.frombuffer(self.bg, np.uint8), cv2.IMREAD_COLOR)
        back = await self.image_edge_detection(back)

        slide_pic = cv2.cvtColor(slide, cv2.COLOR_GRAY2RGB)
        back_pic = cv2.cvtColor(back, cv2.COLOR_GRAY2RGB)
        x = await self.template_match(slide_pic, back_pic)
        # 输出横坐标, 即 滑块在图片上的位置
        return x[0]

