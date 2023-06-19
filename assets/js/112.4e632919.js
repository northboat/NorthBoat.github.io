(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{1100:function(_,v,A){"use strict";A.r(v);var p=A(0),d=Object(p.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("blockquote",[v("p",[_._v("门电路实现了各种底层逻辑功能")]),_._v(" "),v("p",[_._v("将这些门电路进行排列组合，便变成了组合逻辑电路")])]),_._v(" "),v("h2",{attrs:{id:"组合逻辑电路概述"}},[_._v("组合逻辑电路概述")]),_._v(" "),v("p",[_._v("特点：当前时刻输出仅取决于该时刻的输入，与电路原来状态（历史状态）无关（时序）")]),_._v(" "),v("p",[_._v("电路结构：由逻辑门电路组成，输入输出都可是多个")]),_._v(" "),v("p",[_._v("电路特点：没有记忆单元，无反馈状态")]),_._v(" "),v("p",[_._v("数字电路可以分为"),v("code",[_._v("组合逻辑电路")]),_._v("和"),v("code",[_._v("时序逻辑电路")]),_._v("，前者只和输入有关，后者不仅与输入有关还与历史状态有关")]),_._v(" "),v("p",[_._v("只要输入确定，输出就确定，可以绘制成一张真值表或使用一组逻辑函数表示")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("y1 = f1(a1,a2,...,an)")])]),_._v(" "),v("li",[v("code",[_._v("y2 = f2(a1,a2,...,an)")])]),_._v(" "),v("li",[_._v("......")]),_._v(" "),v("li",[v("code",[_._v("yn = fn(a1,a2,...,an)")])])]),_._v(" "),v("p",[_._v("y为输出端，a为输入端")]),_._v(" "),v("h2",{attrs:{id:"组合逻辑电路分析方法"}},[_._v("组合逻辑电路分析方法")]),_._v(" "),v("blockquote",[v("p",[_._v("图 ——> 功能")])]),_._v(" "),v("p",[_._v("通过分析电路图，找出电路的逻辑功能")]),_._v(" "),v("p",[v("strong",[_._v("分析步骤：")])]),_._v(" "),v("ul",[v("li",[_._v("给定的逻辑电路")]),_._v(" "),v("li",[_._v("输出逻辑函数式")]),_._v(" "),v("li",[_._v("列真值表")]),_._v(" "),v("li",[_._v("分析逻辑功能")])]),_._v(" "),v("p",[_._v("以函数式为核心，向其看齐，一般通过真值表分析逻辑功能（猜谜）")]),_._v(" "),v("p",[_._v("练习一些电路的输入输出真值表，并对功能加以推测")]),_._v(" "),v("p",[_._v("常见功能：")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("判断1数量的奇偶")]),_._v(" "),v("p",[_._v("奇输出1，偶输出0")])]),_._v(" "),v("li",[v("p",[_._v("判断输入二进制数的取值范围")]),_._v(" "),v("p",[_._v("如0-3输出一个"),v("code",[_._v("y1=1,y2=0")]),_._v("，4-7输出两个"),v("code",[_._v("y1=0,y2=1")])])]),_._v(" "),v("li",[v("p",[_._v("判断输入1的数量是否大于等于2")])]),_._v(" "),v("li",[v("p",[_._v("......")])])]),_._v(" "),v("p",[_._v("当一个电路满足：")]),_._v(" "),v("ul",[v("li",[_._v("判断1数量的奇偶，奇输出1，偶输出0")]),_._v(" "),v("li",[_._v("判断输入1的数量是否大于等于2")])]),_._v(" "),v("p",[_._v("它可以是一个加法器：")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("输入A、B、C")]),_._v(" "),v("ul",[v("li",[_._v("A、B为要加的两个数")]),_._v(" "),v("li",[_._v("C为进位标识符")])])]),_._v(" "),v("li",[v("p",[_._v("输出Y1、Y2")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("Y2储存加的结果：偶数个1为0，奇数个1为1")]),_._v(" "),v("p",[_._v("如1+1=0，1+0=1，0+1=1，0+0=0")]),_._v(" "),v("p",[_._v("当有三个1，AB相加为0，C进位得1")])]),_._v(" "),v("li",[v("p",[_._v("Y1表示是否向上进位")])])])])]),_._v(" "),v("h2",{attrs:{id:"组合逻辑电路设计方法"}},[_._v("组合逻辑电路设计方法")]),_._v(" "),v("blockquote",[v("p",[_._v("与分析方法互异")]),_._v(" "),v("p",[_._v("功能 ——> 图")])]),_._v(" "),v("p",[_._v("根据实际逻辑问题，求出实现这一逻辑功能的最简单的逻辑电路")]),_._v(" "),v("p",[_._v("最简：")]),_._v(" "),v("ul",[v("li",[_._v("电路所用器件数最少")]),_._v(" "),v("li",[_._v("器件的种类最少")]),_._v(" "),v("li",[_._v("器件之间的连线最少")])]),_._v(" "),v("p",[v("strong",[_._v("设计步骤：")])]),_._v(" "),v("ul",[v("li",[v("p",[v("strong",[_._v("进行逻辑抽象")])]),_._v(" "),v("ul",[v("li",[v("p",[_._v("找到输入、输出变量")])]),_._v(" "),v("li",[v("p",[_._v("对输入输出变量进行逻辑状态赋值")])]),_._v(" "),v("li",[v("p",[_._v("列真值表")])])])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("写出逻辑函数式")])])]),_._v(" "),v("li",[v("p",[_._v("选定器件的类型")])]),_._v(" "),v("li",[v("p",[_._v("将逻辑函数化简或变换成适当的形式")])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("画逻辑图")])])]),_._v(" "),v("li",[v("p",[_._v("工艺设计")])])]),_._v(" "),v("p",[_._v("逻辑抽象是重难点")]),_._v(" "),v("p",[_._v("例一：下山两条路，一真一假，村名两类人，一说真话一说假话，你碰到了一个村民，只能问一个问题，如何确定下山的路")]),_._v(" "),v("p",[_._v("答案：如果我问你右边这条路是否能够下山，你会回答"),v("strong",[_._v("是")]),_._v("吗？")]),_._v(" "),v("ul",[v("li",[_._v("对于说假话的村民加了一层逻辑非：即这条路若能够下山，那么我是说假话的，我认为否，但提问的是"),v("code",[_._v("是否会回答是")]),_._v("，我此时确实认为要回答否，于是对于"),v("code",[_._v("是否会回答是")]),_._v("这一问题我要回答"),v("code",[_._v("否")]),_._v("，但因为我要说假话，我又要回答"),v("code",[_._v("是")])])]),_._v(" "),v("p",[_._v("例二：交通信号灯故障，有以下故障情况，三灯都不亮，R/Y同时亮，A/G同时亮，R/Y同时亮，三灯同时亮。请做出一个判断信号灯是否故障的电路")]),_._v(" "),v("p",[_._v("三个输入：红（R）黄（Y）绿（G）灯")]),_._v(" "),v("p",[_._v("一个输出：是否出现故障（Z）")]),_._v(" "),v("p",[_._v("画真值表")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("R")]),_._v(" "),v("th",[_._v("Y")]),_._v(" "),v("th",[_._v("G")]),_._v(" "),v("th",[_._v("Z")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("0")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td",[_._v("1")])]),_._v(" "),v("tr",[v("td",[_._v("0")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td",[_._v("1")]),_._v(" "),v("td",[_._v("0")])]),_._v(" "),v("tr",[v("td",[_._v("0")]),_._v(" "),v("td",[_._v("1")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td",[_._v("0")])]),_._v(" "),v("tr",[v("td",[_._v("0")]),_._v(" "),v("td",[_._v("1")]),_._v(" "),v("td",[_._v("1")]),_._v(" "),v("td",[_._v("1")])]),_._v(" "),v("tr",[v("td",[_._v("1")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td",[_._v("0")])]),_._v(" "),v("tr",[v("td",[_._v("1")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td",[_._v("1")]),_._v(" "),v("td",[_._v("1")])]),_._v(" "),v("tr",[v("td",[_._v("1")]),_._v(" "),v("td",[_._v("1")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td",[_._v("1")])]),_._v(" "),v("tr",[v("td",[_._v("1")]),_._v(" "),v("td",[_._v("1")]),_._v(" "),v("td",[_._v("1")]),_._v(" "),v("td",[_._v("1")])])])]),_._v(" "),v("p",[_._v("逻辑函数："),v("code",[_._v("Z = R'Y'G' + R'YG + RYG' + RY'G + RYG")])]),_._v(" "),v("p",[_._v("通过卡诺图化简："),v("code",[_._v("Z = R'T'G' + RA + RG + AG")])]),_._v(" "),v("h2",{attrs:{id:"常用组合逻辑电路"}},[_._v("常用组合逻辑电路")]),_._v(" "),v("h3",{attrs:{id:"编码器"}},[_._v("编码器")]),_._v(" "),v("p",[_._v("数字")]),_._v(" "),v("ul",[v("li",[_._v("表示数量多少")]),_._v(" "),v("li",[_._v("编码，比如电话号码")])]),_._v(" "),v("p",[_._v("编码：用文字、图像或数码表示特定对象的过程")]),_._v(" "),v("p",[_._v("编码器的逻辑功能：把输入的每一个高、低电平信号编制成一个对应的二进制代码")]),_._v(" "),v("p",[_._v("编码器")]),_._v(" "),v("ul",[v("li",[_._v("普通编码器：同时只相应一个有效信号")]),_._v(" "),v("li",[_._v("优先编码器：可以有多个同时相应，排队处理，有一个优先级的设定")])]),_._v(" "),v("h4",{attrs:{id:"八三编码器"}},[_._v("八三编码器")]),_._v(" "),v("blockquote",[v("p",[_._v("八线三线编码器")]),_._v(" "),v("p",[_._v("属于普通编码器")]),_._v(" "),v("p",[_._v("任何时刻只允许输入一个编码信号，否则输出将混乱")])]),_._v(" "),v("p",[_._v("输入为"),v("code",[_._v("I1-I8")]),_._v("，输出为"),v("code",[_._v("Y1-Y3")])]),_._v(" "),v("p",[_._v("同时只能有一个"),v("code",[_._v("I")]),_._v("高电平输入，如"),v("code",[_._v("I2")]),_._v("输入高电平，则"),v("code",[_._v("Y1-Y3")]),_._v("依次输出"),v("code",[_._v("010")]),_._v("，表示二进制数 2，若同时有两个"),v("code",[_._v("I")]),_._v("输入，就会崩坏")]),_._v(" "),v("p",[_._v("根据真值表可得")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("Y3=I4+I5+I6+I7")])]),_._v(" "),v("li",[v("code",[_._v("Y2=I2+I3+I6+I7")])]),_._v(" "),v("li",[v("code",[_._v("Y1=I1+I3+I5+I7")])])]),_._v(" "),v("p",[_._v("那么就可以画出一个相应的逻辑图设计门电路")]),_._v(" "),v("h4",{attrs:{id:"优先编码器"}},[_._v("优先编码器")]),_._v(" "),v("p",[_._v("允许同时输入两个或以上信号，并按优先级输出一个信号")]),_._v(" "),v("p",[_._v("通过一坨与门、或非门进行优先级的检测")]),_._v(" "),v("ul",[v("li",[_._v("使用与门封锁同时进来的信号")]),_._v(" "),v("li",[_._v("限制高低电平的通过")])]),_._v(" "),v("p",[_._v("S为选通输入端")]),_._v(" "),v("ul",[v("li",[_._v("S'=0，正常工作")]),_._v(" "),v("li",[_._v("S'=1，输出端被封锁在高电平，即所有输出端"),v("code",[_._v("Y'")]),_._v("都是高电平（111）")])]),_._v(" "),v("p",[_._v("Ys'为选通输出端")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("Ys = (I0' I1' I2' I3' I4' I5' I6' I7' S)'")])])]),_._v(" "),v("p",[_._v("Y(EX)'为扩展端，用于扩展编码功能")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("Y(EX)' = [(I0+I1+I2+I3+I4+I5+I6+I7)S]'")])])]),_._v(" "),v("p",[_._v("只要任何一个输入端有低电平输入且S=1（正常工作），"),v("code",[_._v("Y(EX)'")]),_._v("为低电平")]),_._v(" "),v("p",[_._v("大当家非为1，二当家才有效；大当家和二当家非为1，三当家才有效；以此类推")]),_._v(" "),v("p",[_._v("我们用低电平表示有效，节省功耗（但不利于理解）")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("Ys'`")]),_._v(" "),v("th",[_._v("Y(EX)'")]),_._v(" "),v("th",[_._v("状态")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("1")]),_._v(" "),v("td",[_._v("1")]),_._v(" "),v("td",[_._v("不工作")])]),_._v(" "),v("tr",[v("td",[_._v("0")]),_._v(" "),v("td",[_._v("1")]),_._v(" "),v("td",[_._v("工作但无输入")])]),_._v(" "),v("tr",[v("td",[_._v("1")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td",[_._v("工作且有输入")])]),_._v(" "),v("tr",[v("td",[_._v("0")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td",[_._v("不可能出现")])])])]),_._v(" "),v("h5",{attrs:{id:"_16线4线优先编码器"}},[_._v("16线4线优先编码器")]),_._v(" "),v("p",[_._v("高低八位输入，四位输出")]),_._v(" "),v("p",[_._v("高低位通过低八位的"),v("code",[_._v("Ys'")]),_._v("和高八位的"),v("code",[_._v("S'")]),_._v("连接，只有当低八位不工作或工作但无输入时，高八位才会正常工作")]),_._v(" "),v("p",[_._v("若低八位工作且有输入，高八位将不工作")]),_._v(" "),v("h5",{attrs:{id:"十进制优先编码器"}},[_._v("十进制优先编码器")]),_._v(" "),v("p",[_._v("BCD编码：二进制转十进制编码器")]),_._v(" "),v("h3",{attrs:{id:"译码器"}},[_._v("译码器")]),_._v(" "),v("p",[_._v("编码的反操作，将每个输入的二进制码译成对应的输出高低电平信号")]),_._v(" "),v("p",[_._v("常用的译码器：二进制译码器，二-十进制译码器和显示译码器")]),_._v(" "),v("h4",{attrs:{id:"二进制译码器"}},[_._v("二进制译码器")]),_._v(" "),v("p",[v("strong",[_._v("3线8线译码器")])]),_._v(" "),v("blockquote",[v("p",[_._v("8线3线编码器的反操作")]),_._v(" "),v("p",[_._v("简单好用")])]),_._v(" "),v("p",[_._v("低电平输出（低电平为有效，高电平为无效）")]),_._v(" "),v("p",[v("strong",[_._v("二极管与门阵列实现")])]),_._v(" "),v("p",[_._v("二极管导通压降：0.7V")]),_._v(" "),v("p",[_._v("纯纯使用二极管正负导向和导通压降控制电流传输")]),_._v(" "),v("p",[_._v("缺点：")]),_._v(" "),v("ul",[v("li",[_._v("输入电阻低，输出电阻较高")]),_._v(" "),v("li",[_._v("输出高、低电平信号存在偏移")])]),_._v(" "),v("p",[_._v("实际上不会使用二极管，而是使用三极管或CMOS")]),_._v(" "),v("p",[v("strong",[_._v("TTL与非门实现3-8译码器")])]),_._v(" "),v("p",[_._v("附加控制端G："),v("code",[_._v("S2' = S3' = 0, S1 = 1")]),_._v("时G输出1，其余情况输出0")]),_._v(" "),v("p",[_._v("当G输出为高电平时正常工作，当G输出低电平全部被封锁到高电平")]),_._v(" "),v("p",[_._v("该译码器也叫最小项译码器")]),_._v(" "),v("p",[_._v("与二极管阵列实现区别")]),_._v(" "),v("ul",[v("li",[_._v("用逻辑门实现")]),_._v(" "),v("li",[_._v("输出端低电平有效")]),_._v(" "),v("li",[_._v("有3个附加控制端")])]),_._v(" "),v("p",[v("strong",[_._v("4线16线译码器")])]),_._v(" "),v("p",[_._v("用两片3线8线译码器组成，两个TTL的控制端相连，达到第一片和第二片不同时工作的效果")]),_._v(" "),v("h4",{attrs:{id:"二-十进制译码器"}},[_._v("二-十进制译码器")]),_._v(" "),v("p",[_._v("将输入BCD码的是个代码译成10个高、低电平输出信号")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("Y0' = (A3' A2' A1' A0')'")])]),_._v(" "),v("li",[v("code",[_._v("Y1' = (A3' A2' A1' A0)'")])]),_._v(" "),v("li",[v("code",[_._v("Y2' = (A3' A2' A1 A0')'")])]),_._v(" "),v("li",[v("code",[_._v("Y3' = (A3' A2' A1 A0)'")])]),_._v(" "),v("li",[v("code",[_._v("Y4' = (A3' A2 A1' A0')'")])]),_._v(" "),v("li",[v("code",[_._v("Y5' = (A3' A2 A1' A0)'")])]),_._v(" "),v("li",[v("code",[_._v("Y6' = (A3' A2 A1 A0')'")])]),_._v(" "),v("li",[v("code",[_._v("Y7' = (A3' A2 A1 A0)'")])]),_._v(" "),v("li",[v("code",[_._v("Y8' = (A3 A2' A1' A0')'")])]),_._v(" "),v("li",[v("code",[_._v("Y9' = (A3 A2' A1' A0)'")])])]),_._v(" "),v("h4",{attrs:{id:"显示译码器"}},[_._v("显示译码器")]),_._v(" "),v("p",[v("strong",[_._v("七段字符显示器")])]),_._v(" "),v("p",[_._v("分半导体数码管和液晶显示器两种")]),_._v(" "),v("p",[_._v("1、LED数码管")]),_._v(" "),v("blockquote",[v("p",[_._v("希望广而告之")])]),_._v(" "),v("p",[_._v("半导体：好多二极管，公共阴极")]),_._v(" "),v("p",[_._v("优点：工作电压低、体积小、寿命长、可靠性高、响应时间短、亮度高")]),_._v(" "),v("p",[_._v("缺点：功耗大")]),_._v(" "),v("p",[_._v("2、液晶显示器")]),_._v(" "),v("blockquote",[v("p",[_._v("满足个人需求")])]),_._v(" "),v("p",[_._v("液晶：一种有机化合物，颜色受外加电场影响")]),_._v(" "),v("p",[_._v("优点：功耗小，工作电压低")]),_._v(" "),v("p",[_._v("缺点：亮度差，响应速度低")]),_._v(" "),v("p",[v("strong",[_._v("BCD-七段显示译码器")])]),_._v(" "),v("p",[_._v("驱动显示器件，数码管或液晶显示器")]),_._v(" "),v("p",[_._v("其逻辑函数经卡诺图化简可")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("Ya = [(A3' A2' A1' A0)+(A3 A1)+(A2 A0')]'")])]),_._v(" "),v("li",[v("code",[_._v("Yb = [(A3 A1)+(A2 A1 A0')+(A2 A1' A0')]'")])]),_._v(" "),v("li",[v("code",[_._v("Yb = [(A3 A2)+(A2' A1 A0')]'")])]),_._v(" "),v("li",[v("code",[_._v("Yd = [(A2 A1 A0)+(A2 A1' A0')+(A2' A1' A0)]'")])]),_._v(" "),v("li",[v("code",[_._v("Ye = [(A2 A1')+(A0)]'")])]),_._v(" "),v("li",[v("code",[_._v("Yf = [(A3' A2' A0)+(A2' A1)+(A1 A0)]'")])]),_._v(" "),v("li",[v("code",[_._v("Yg = [(A3' A2' A1')+(A2 A1 A0)]'")])])]),_._v(" "),v("p",[_._v("逻辑函数 ——> 电路图 ——> 电路器件")]),_._v(" "),v("p",[_._v("输入端")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("正常输入端：A0 A1 A2 A3")])]),_._v(" "),v("li",[v("p",[_._v("灭灵输入RBI：把不希望显示的零熄灭")])]),_._v(" "),v("li",[v("p",[_._v("灯测试输入LT：当LT'=0，正常情况所有灯将被同时点亮")])]),_._v(" "),v("li",[v("p",[_._v("灭灯输入/灭零输出BI'/RBO'：双功能端")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("作为输入端使用，成为输入控制端")]),_._v(" "),v("p",[_._v("只要BI'=0，无论A怎么输入，数码管各段同时熄灭")])]),_._v(" "),v("li",[v("p",[_._v("作为输出端使用，成为灭零输出端，与灭零输入端相连")])])])])]),_._v(" "),v("h4",{attrs:{id:"用译码器设计组合逻辑电路"}},[_._v("用译码器设计组合逻辑电路")]),_._v(" "),v("p",[_._v("使用3线8线译码器设计一个多输出的组合逻辑电路")]),_._v(" "),v("p",[_._v("38译码器：最小项译码器，可以实现任意的三变量的组合逻辑电路")]),_._v(" "),v("p",[_._v("设计过程")]),_._v(" "),v("ol",[v("li",[_._v("将给定函数化成最小项和形式：每项都出现，每项不重复，如"),v("code",[_._v("AC ——> ABC+AB'C = m0+m2")])]),_._v(" "),v("li",[_._v("变换成与非的形式（非非的形式，为了用零表示有效输出）：如"),v("code",[_._v("m0+m2 ——> (m0'm2')'")])]),_._v(" "),v("li",[_._v("根据38译码器设计相应电路")])]),_._v(" "),v("h3",{attrs:{id:"数据选择器"}},[_._v("数据选择器")]),_._v(" "),v("p",[_._v("使用38译码器设计的组合逻辑电路只能有三个输入，为实现四个输入，引入数据选择器")]),_._v(" "),v("p",[_._v("四选一：三变量的组合逻辑函数")]),_._v(" "),v("p",[_._v("八选一（双四选一）：四变量的组合逻辑函数")]),_._v(" "),v("h4",{attrs:{id:"四选一选择器"}},[_._v("四选一选择器")]),_._v(" "),v("p",[_._v("从一组输入数据中选出某一个来，用到数据选择器，又叫多路选择开关："),v("code",[_._v("MUX")])]),_._v(" "),v("p",[_._v("就类似于高中电路那种单刀双掷开关，四选一就是说单刀四掷开关")]),_._v(" "),v("p",[_._v("一个四选一选择器：")]),_._v(" "),v("ul",[v("li",[_._v("地址线 A")]),_._v(" "),v("li",[_._v("非门开关 S")]),_._v(" "),v("li",[_._v("四个输入端口 Di")]),_._v(" "),v("li",[_._v("一个输出端口 Y")])]),_._v(" "),v("p",[_._v("判断是双四选一还是八选一电路：有几个地址线，双四选一为两个，八选一为一个")]),_._v(" "),v("p",[_._v("四选一选择器")]),_._v(" "),v("ul",[v("li",[v("p",[v("code",[_._v("Y1 = [D0(A1'A0') + D1(A1'A0) + D2(A1A0') + D3(A1A0)]S1")])]),_._v(" "),v("p",[_._v("其中一个四选一选择器")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("Y2 = [D0(A1'A0') + D1(A1'A0) + D2(A1A0') + D3(A1A0)]S2")])]),_._v(" "),v("p",[_._v("另一个四选一选择器")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("Y = Y1 + Y2")])]),_._v(" "),v("p",[_._v("八选一选择器输出")])])]),_._v(" "),v("p",[_._v("需要注意："),v("code",[_._v("S' = 0")]),_._v("时，选择器正常工作，否则选择器被禁止工作，被封锁为低电平")]),_._v(" "),v("p",[_._v("S'也做扩展端用，作为片间的连接")]),_._v(" "),v("h4",{attrs:{id:"八选一选择器"}},[_._v("八选一选择器")]),_._v(" "),v("p",[_._v("有三个地址线A0/A1/A2")]),_._v(" "),v("p",[_._v("两个四选一选择器的开关"),v("code",[_._v("S1")]),_._v("不能等于"),v("code",[_._v("S2")]),_._v("，即同时只有一个四选一起效，通常"),v("code",[_._v("S1/S2")]),_._v("通过一个反相器相连以实现")]),_._v(" "),v("p",[v("code",[_._v("Y = D0(A2'A1'A0') + D1(A2'A1'A0) + D2(A2'A1A0') + D3(A2'A1A0) + D4(A2A1'A0') + D5(A2A1'A0) + D6(A2A1A0') + D7(A2A1A0)")])]),_._v(" "),v("p",[_._v("同时再加一个输入控制端"),v("code",[_._v("S'")]),_._v("，便构成了一个八选一数据选择器")]),_._v(" "),v("h4",{attrs:{id:"用选择器设计组合逻辑电路"}},[_._v("用选择器设计组合逻辑电路")]),_._v(" "),v("p",[_._v("四选一选择器："),v("code",[_._v("Y = [D0(A1'A0') + D1(A1'A0) + D2(A1A0') + D3(A1A0)]S'")])]),_._v(" "),v("p",[_._v("A1/A0作为两个输入变量，D0...D3为第三个变量的适当形式（如A0/A0'/A1/A1'），就可以产生任何形式的"),v("code",[_._v("3")]),_._v("变量组合逻辑函数")]),_._v(" "),v("p",[_._v("将"),v("code",[_._v("Z = R'A'G' + RA + RG + AG")])]),_._v(" "),v("p",[_._v("化为"),v("code",[_._v("Z = R'(A'G') + R(A'G) + R(AG') + 1(AG)")])]),_._v(" "),v("p",[_._v("那么进行匹配，有")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("D0: R'")])]),_._v(" "),v("li",[v("code",[_._v("D1/D2: R")])]),_._v(" "),v("li",[v("code",[_._v("D3:1")])]),_._v(" "),v("li",[v("code",[_._v("A1:A")])]),_._v(" "),v("li",[v("code",[_._v("A0: G")])])]),_._v(" "),v("p",[_._v("S'直接接地，使正常工作，D3置空，A直连A1，G直连A0，R直连D1/D2，通过反相器连接D0")]),_._v(" "),v("p",[_._v("八选一选择器："),v("code",[_._v("Y = D0(A2'A1'A0') + D1(A2'A1'A0) + ... + D7(A2A1A0)")])]),_._v(" "),v("p",[_._v("使用八选一选择器产生三变量逻辑函数："),v("code",[_._v("Z = A'B'C' + AC + A'BC")])]),_._v(" "),v("p",[_._v("令"),v("code",[_._v("A2=A，A1=B, A2=C")]),_._v("，然后存在项的"),v("code",[_._v("Di")]),_._v("置为"),v("code",[_._v("1")]),_._v("，不存在的项的"),v("code",[_._v("Di")]),_._v("置为"),v("code",[_._v("0")])]),_._v(" "),v("h3",{attrs:{id:"加法器"}},[_._v("加法器")]),_._v(" "),v("blockquote",[v("p",[_._v("没有减法器、乘法器，只有加法器，所有算术运算都是通过加法和移位来实现的")]),_._v(" "),v("p",[_._v("CPU ——> 运算器：加法器为核心")])]),_._v(" "),v("h4",{attrs:{id:"半加器"}},[_._v("半加器")]),_._v(" "),v("p",[_._v("半加器：如"),v("code",[_._v("1+1, 0+0, 0+1, 1+0")]),_._v("，只考虑当前位值以及是否进位，只判断是否，不加")]),_._v(" "),v("ul",[v("li",[_._v("当前位"),v("code",[_._v("S = A异或B")])]),_._v(" "),v("li",[_._v("进位标志"),v("code",[_._v("CO = AB")])])]),_._v(" "),v("p",[_._v("个位数的加法使用半加器即可")]),_._v(" "),v("p",[_._v("全加器，不仅考虑当前位数，并且考虑来自低位的进位"),v("code",[_._v("CI")]),_._v("，即要向上多考虑一位，"),v("code",[_._v("A(1)+B(0)+CI(1) = 10")])]),_._v(" "),v("p",[_._v("等于是有三个输入，即当前位的两个数和进位输入")]),_._v(" "),v("h4",{attrs:{id:"全加器"}},[_._v("全加器")]),_._v(" "),v("p",[_._v("串行进位加法器")]),_._v(" "),v("p",[_._v("必须使用多个全加器，依次将低位全加器的进位输出端CO接到高位输入端CI实现进位功能")]),_._v(" "),v("p",[_._v("超前进位加法器")]),_._v(" "),v("p",[_._v("串行的进位信号逐级传递的传输速度过慢，于是设计出超前进位加法器")]),_._v(" "),v("p",[_._v("两个多位数第i位相加产生的进位输出信号CO可以表示为："),v("code",[_._v("CO(i) = AiBi + (Ai+Bi)CI(i)")])]),_._v(" "),v("ul",[v("li",[_._v("即AB均为1 或 AB有一个为1且进位符为1")]),_._v(" "),v("li",[_._v("这里"),v("code",[_._v("CI(i)")]),_._v("是未知的，是当前位的进位输入信号，实际上就是上一位的进位输出信号")])]),_._v(" "),v("p",[_._v("将"),v("code",[_._v("AiBi")]),_._v("定义为"),v("code",[_._v("Gi")]),_._v("，"),v("code",[_._v("Ai+Bi")]),_._v("定义为"),v("code",[_._v("Pi")]),_._v("，则：")]),_._v(" "),v("p",[v("code",[_._v("CO(i) = G(i) + P(i)CI(i)")])]),_._v(" "),v("p",[v("code",[_._v("= Gi + Pi[G(i-1) + P(i-1)CI(i-1)]")])]),_._v(" "),v("ul",[v("li",[_._v("就是将当前位的进位输入信号替换为上一位的进位输出信号，重复这一过程，将直接计算到最低位")])]),_._v(" "),v("p",[_._v("CPU计算的速度远远大于信号传递的速度，对每一位都进行这样的计算，得到加法结果")]),_._v(" "),v("p",[_._v("优点：运算时间短")]),_._v(" "),v("p",[_._v("缺点：电路复杂，增加了成本，稳定性降低")]),_._v(" "),v("p",[_._v("以空间换时间")]),_._v(" "),v("h4",{attrs:{id:"用加法器设计组合逻辑电路"}},[_._v("用加法器设计组合逻辑电路")]),_._v(" "),v("p",[_._v("通常用加法器实现两个逻辑变量相加")]),_._v(" "),v("p",[_._v("将8421码转换成余3码：")]),_._v(" "),v("ul",[v("li",[_._v("余3码：就是正常的二进制数+3，比如6为0110，它的余3码就是1001")]),_._v(" "),v("li",[_._v("可以保证进位信号的一致性")])]),_._v(" "),v("p",[_._v("Y为输出，ABCD为输入："),v("code",[_._v("Y3Y2Y1Y0 = DCBA + 0011")])]),_._v(" "),v("h3",{attrs:{id:"数值比较器"}},[_._v("数值比较器")]),_._v(" "),v("h4",{attrs:{id:"_1位数值比较器"}},[_._v("1位数值比较器")]),_._v(" "),v("p",[_._v("如何比较A和B，底层使用与非门电路进行比较")]),_._v(" "),v("p",[_._v("A>B（A=1，B=0）："),v("code",[_._v("AB' = 1")])]),_._v(" "),v("p",[_._v("A<B（A=0，B=1）："),v("code",[_._v("A'B = 1")])]),_._v(" "),v("p",[_._v("A=B："),v("code",[_._v("A⊕B = 0")])]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("A")]),_._v(" "),v("th",[_._v("B")]),_._v(" "),v("th",[_._v("Y1'(A>B)")]),_._v(" "),v("th",[_._v("Y2'(A<B)")]),_._v(" "),v("th",[_._v("Y3'(A=B)")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("0")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td",[_._v("1")]),_._v(" "),v("td",[_._v("1")]),_._v(" "),v("td",[_._v("0")])]),_._v(" "),v("tr",[v("td",[_._v("0")]),_._v(" "),v("td",[_._v("1")]),_._v(" "),v("td",[_._v("1")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td",[_._v("1")])]),_._v(" "),v("tr",[v("td",[_._v("1")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td",[_._v("1")]),_._v(" "),v("td",[_._v("1")])]),_._v(" "),v("tr",[v("td",[_._v("1")]),_._v(" "),v("td",[_._v("1")]),_._v(" "),v("td",[_._v("1")]),_._v(" "),v("td",[_._v("1")]),_._v(" "),v("td",[_._v("0")])])])]),_._v(" "),v("ul",[v("li",[v("code",[_._v("Y1' = (A'B)'")])]),_._v(" "),v("li",[v("code",[_._v("Y2' = [(A'B)'(AB')']'")])]),_._v(" "),v("li",[v("code",[_._v("Y3' = (AB')'")])])]),_._v(" "),v("h4",{attrs:{id:"多位数值比较器"}},[_._v("多位数值比较器")]),_._v(" "),v("p",[_._v("又高位到低位的逐位比较，只有高位相等时才需要比较低位")]),_._v(" "),v("p",[_._v("输出同样为三个：即大于、小于、等于")]),_._v(" "),v("h2",{attrs:{id:"竞争-冒险现象"}},[_._v("竞争-冒险现象")]),_._v(" "),v("p",[_._v("竞争：门电路的两个输入信号同时向相反的逻辑电平跳变的现象，二者跳变的顺序决定了不同的输出结果")]),_._v(" "),v("p",[_._v("竞争-冒险：由于竞争电路输出端出现尖峰脉冲的现象")]),_._v(" "),v("ul",[v("li",[_._v("竞争是竞争-冒险的必要不充分条件")])]),_._v(" "),v("p",[_._v("就比如："),v("code",[_._v("Y = AB")]),_._v("，本来"),v("code",[_._v("A=1, B=0, Y=0")]),_._v("，在某一时刻，"),v("code",[_._v("A->0, B->1")]),_._v("，按道理来说"),v("code",[_._v("Y")]),_._v("仍为0，但二者跳变存在时间差，使得某一小段时间"),v("code",[_._v("Y=1")]),_._v("，这就叫尖峰脉冲，发生了竞争-冒险现象")]),_._v(" "),v("ul",[v("li",[_._v("可能对电路系统造成损坏")]),_._v(" "),v("li",[_._v("可能增加功耗")])]),_._v(" "),v("p",[_._v("通过检查逻辑函数式判断是否存在竞争-冒险现象，并通过变换进行消除")]),_._v(" "),v("h3",{attrs:{id:"检查方法"}},[_._v("检查方法")]),_._v(" "),v("p",[_._v("1、观察输出逻辑函数")]),_._v(" "),v("p",[_._v("若输出端的逻辑函数在一定条件下可化为"),v("code",[_._v("Y=A+A', Y=AA'")]),_._v("，则可判定存在竞争冒险现象")]),_._v(" "),v("p",[_._v("2、使用实验检测")]),_._v(" "),v("p",[_._v("概率事件")]),_._v(" "),v("p",[_._v("举个栗子：")]),_._v(" "),v("p",[_._v("对于输出函数式"),v("code",[_._v("Y = AB+A'C")])]),_._v(" "),v("p",[_._v("当B=1且C=1时，Y=A+A'，于是我们得知这个电路一定会存在竞争冒险现象")]),_._v(" "),v("p",[_._v("输出函数："),v("code",[_._v("Y = (A+B)(B'+C)")])]),_._v(" "),v("p",[_._v("当A=C=0时，Y=BB'，一定存在竞争冒险")]),_._v(" "),v("h3",{attrs:{id:"消除竞争冒险"}},[_._v("消除竞争冒险")]),_._v(" "),v("p",[_._v("1、接入滤波电容")]),_._v(" "),v("p",[_._v("在输出端接一个小电容接地（通交流截直流）")]),_._v(" "),v("p",[_._v("优点：简单")]),_._v(" "),v("p",[_._v("缺点：增加了输出电压波形上升和下降时间，破坏波形（增加了相应时间）")]),_._v(" "),v("p",[_._v("2、修改逻辑设计")]),_._v(" "),v("p",[_._v("对于"),v("code",[_._v("Y = AB+A'C")]),_._v("，通常增加一个冗（rong）余输入变量"),v("code",[_._v("BC")])]),_._v(" "),v("p",[_._v("得："),v("code",[_._v("Y = AB+A'C+BC")])]),_._v(" "),v("p",[_._v("当B=C=1，电路输出本就是1，不会出现突变")]),_._v(" "),v("ul",[v("li",[_._v("增加冗余项消除竞争冒险")])]),_._v(" "),v("p",[v("strong",[_._v("Summary")])]),_._v(" "),v("p",[_._v("现在几乎所有的电路都具有记忆功能，但现在的组合逻辑电路只与当前输入有关，不具有记忆功能")]),_._v(" "),v("p",[_._v("组合逻辑电路的分析步骤：写出输出端逻辑表达式 - 化简变换逻辑表达式 - 列出真值表 - 确定功能")]),_._v(" "),v("p",[_._v("组合逻辑电路的设计步骤：根据设计要求列出真值表 - 写出逻辑表达式或画出卡诺图 - 化简和变换 - 画出逻辑图")]),_._v(" "),v("p",[_._v("常见的组合逻辑器件：译码器，数据选择器")])])}),[],!1,null,null,null);v.default=d.exports}}]);