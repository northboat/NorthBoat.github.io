(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{1072:function(v,_,t){"use strict";t.r(_);var e=t(0),d=Object(e.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"基础知识"}},[v._v("基础知识")]),v._v(" "),_("h3",{attrs:{id:"指令系统"}},[v._v("指令系统")]),v._v(" "),_("p",[v._v("复杂指令集（"),_("code",[v._v("CISC")]),v._v("）："),_("code",[v._v("Intel系、VAX")])]),v._v(" "),_("p",[v._v("精简指令集（"),_("code",[v._v("RISC")]),v._v("）："),_("code",[v._v("ARM、MIPS、PowerPC、SPARC、RISC-V")])]),v._v(" "),_("p",[v._v("指令集架构")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("X86")]),v._v("：美国"),_("code",[v._v("intel（CISC）")]),v._v("，桌面端")]),v._v(" "),_("li",[_("code",[v._v("ARM")]),v._v("：英国"),_("code",[v._v("arm（RISC）")]),v._v("，移动端")]),v._v(" "),_("li",[_("code",[v._v("LoongArch")]),v._v("：龙芯")])]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("语言")]),v._v(" "),_("th",[v._v("特点")]),v._v(" "),_("th",[v._v("优点")]),v._v(" "),_("th",[v._v("缺点")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("机器语言")]),v._v(" "),_("td",[v._v("二进制代码，机器指令的集合，称为机器码，CPU可直接解读")]),v._v(" "),_("td",[v._v("执行速度快，效率高")]),v._v(" "),_("td",[v._v("表意不直观，读、写、改较困难")])]),v._v(" "),_("tr",[_("td",[v._v("汇编语言")]),v._v(" "),_("td",[v._v("符号语言，与机器语言一一对应，主体是汇编指令，是机器指令便于记忆的书写格式（机器指令的助记符）")]),v._v(" "),_("td",[v._v("面向硬件编程，时空上效率较高")]),v._v(" "),_("td",[v._v("涉及硬件细节，需要熟悉计算机系统内部结构")])]),v._v(" "),_("tr",[_("td",[v._v("高级语言")]),v._v(" "),_("td",[v._v("面向人的语言，表示形式接近自然语言")]),v._v(" "),_("td",[v._v("易学易用")]),v._v(" "),_("td",[v._v("代码冗长，占用内存多，执行时间长，效率不高，不能操作某些硬件")])])])]),v._v(" "),_("p",[_("strong",[v._v("why assembly?")])]),v._v(" "),_("ul",[_("li",[v._v("汇编语言在CPU的寄存器级上进行控制和操作，直接对计算机硬件进行编程")]),v._v(" "),_("li",[v._v("在计算机系统中，机器自检、系统初始化、实际输入输出设备的操作等都需要用汇编语言程序实现")])]),v._v(" "),_("p",[v._v("程序员 — 汇编指令（"),_("code",[v._v(".asm")]),v._v("）—> 汇编器 — "),_("code",[v._v("机器码")]),v._v(" —> 计算机执行")]),v._v(" "),_("p",[v._v("汇编语言组成：")]),v._v(" "),_("ul",[_("li",[v._v("汇编指令（核心）")]),v._v(" "),_("li",[v._v("伪指令")]),v._v(" "),_("li",[v._v("其他符号")])]),v._v(" "),_("h3",{attrs:{id:"数制和码"}},[v._v("数制和码")]),v._v(" "),_("h4",{attrs:{id:"进制转换"}},[v._v("进制转换")]),v._v(" "),_("p",[v._v("十进制、二进制、十六进制的整数、小数转换")]),v._v(" "),_("h4",{attrs:{id:"补码运算"}},[v._v("补码运算")]),v._v(" "),_("p",[v._v("原码、反码、补码的运算")]),v._v(" "),_("h4",{attrs:{id:"有符号数及符号位扩展"}},[v._v("有符号数及符号位扩展")]),v._v(" "),_("p",[v._v("无符号数和有符号数")]),v._v(" "),_("p",[v._v("符号位扩展：将字节扩展为字，字扩展到双字")]),v._v(" "),_("h4",{attrs:{id:"编码"}},[v._v("编码")]),v._v(" "),_("h5",{attrs:{id:"bcd码"}},[v._v("BCD码")]),v._v(" "),_("p",[v._v("BCD码用于计算人熟知的十进制数，在二进制的BCD码中，十进制的"),_("code",[v._v("0-9")]),v._v("都有与之对应的二进制码")]),v._v(" "),_("ul",[_("li",[v._v("8位的二进制数可以表示16个不同的数，于是有不同的方案省去那多余的6个表示")]),v._v(" "),_("li",[v._v("相应在计算时，若碰到"),_("code",[v._v("11-15")]),v._v("这样多余的数，要进行相应处理：加6修正（若是高位则为加"),_("code",[v._v("60H")]),v._v("）")])]),v._v(" "),_("p",[v._v("8421码：就是用二进制数表示十进制数中的"),_("code",[v._v("0-9")]),v._v("，一一对应")]),v._v(" "),_("p",[v._v("余3码：在8421码的基础山，每个十进制数对应的二进制数+3，是为“余3”")]),v._v(" "),_("p",[v._v("2421码："),_("code",[v._v("0-4")]),v._v("五个数对应二进制的"),_("code",[v._v("0-4")]),v._v("，"),_("code",[v._v("5-9")]),v._v("五个数对应二进制的"),_("code",[v._v("11-15")]),v._v("，中间空出6个二进制数")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("十进制数")]),v._v(" "),_("th",[v._v("8421码")]),v._v(" "),_("th",[v._v("2421码")]),v._v(" "),_("th",[v._v("余3码")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("0")]),v._v(" "),_("td",[v._v("0000")]),v._v(" "),_("td",[v._v("0000")]),v._v(" "),_("td",[v._v("0011")])]),v._v(" "),_("tr",[_("td",[v._v("1")]),v._v(" "),_("td",[v._v("0001")]),v._v(" "),_("td",[v._v("0001")]),v._v(" "),_("td",[v._v("0100")])]),v._v(" "),_("tr",[_("td",[v._v("2")]),v._v(" "),_("td",[v._v("0010")]),v._v(" "),_("td",[v._v("0010")]),v._v(" "),_("td",[v._v("0101")])]),v._v(" "),_("tr",[_("td",[v._v("3")]),v._v(" "),_("td",[v._v("0011")]),v._v(" "),_("td",[v._v("0011")]),v._v(" "),_("td",[v._v("0110")])]),v._v(" "),_("tr",[_("td",[v._v("4")]),v._v(" "),_("td",[v._v("0100")]),v._v(" "),_("td",[v._v("0100")]),v._v(" "),_("td",[v._v("0111")])]),v._v(" "),_("tr",[_("td",[v._v("5")]),v._v(" "),_("td",[v._v("0101")]),v._v(" "),_("td",[v._v("1011")]),v._v(" "),_("td",[v._v("1000")])]),v._v(" "),_("tr",[_("td",[v._v("6")]),v._v(" "),_("td",[v._v("0110")]),v._v(" "),_("td",[v._v("1100")]),v._v(" "),_("td",[v._v("1001")])]),v._v(" "),_("tr",[_("td",[v._v("7")]),v._v(" "),_("td",[v._v("0111")]),v._v(" "),_("td",[v._v("1101")]),v._v(" "),_("td",[v._v("1010")])]),v._v(" "),_("tr",[_("td",[v._v("8")]),v._v(" "),_("td",[v._v("1000")]),v._v(" "),_("td",[v._v("1110")]),v._v(" "),_("td",[v._v("1011")])]),v._v(" "),_("tr",[_("td",[v._v("9")]),v._v(" "),_("td",[v._v("1001")]),v._v(" "),_("td",[v._v("1111")]),v._v(" "),_("td",[v._v("1100")])])])]),v._v(" "),_("p",[v._v("压缩的BCD码：用1一个字节（8位）二进制数表示两个8421码")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("364D = 00000011 01100100(BCD) = 0364H")])])]),v._v(" "),_("p",[v._v("非压缩的BCD码：1一个字节（8位）二进制数只表示一个8421码")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("364D = 00000011 00000110 00000100(BCD) = 030604H")])])]),v._v(" "),_("p",[v._v("十进制数运算：BCD码作十进制运算，低4位若大于9，则要加"),_("code",[v._v("6")]),v._v("调整，高四位同理，需加"),_("code",[v._v("60H")]),v._v("调整，手动进位")]),v._v(" "),_("h5",{attrs:{id:"可靠性编码"}},[v._v("可靠性编码")]),v._v(" "),_("p",[v._v("8421奇偶校验码")]),v._v(" "),_("h5",{attrs:{id:"ascii码"}},[v._v("ASCII码")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("常用代码")]),v._v(" "),_("th",[v._v("ASCII对照")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("大写字母A-Z")]),v._v(" "),_("td",[_("code",[v._v("41H-5AH")])])]),v._v(" "),_("tr",[_("td",[v._v("小写字母a-z")]),v._v(" "),_("td",[_("code",[v._v("61H-7AH")])])]),v._v(" "),_("tr",[_("td",[v._v("数字0-9")]),v._v(" "),_("td",[_("code",[v._v("30H-39H")])])]),v._v(" "),_("tr",[_("td",[v._v("空格")]),v._v(" "),_("td",[_("code",[v._v("20H")])])]),v._v(" "),_("tr",[_("td",[v._v("回车")]),v._v(" "),_("td",[_("code",[v._v("0DH")])])]),v._v(" "),_("tr",[_("td",[v._v("换行")]),v._v(" "),_("td",[_("code",[v._v("0AH")])])]),v._v(" "),_("tr",[_("td",[v._v("响铃")]),v._v(" "),_("td",[_("code",[v._v("07H")])])])])]),v._v(" "),_("h2",{attrs:{id:"计算机基本原理"}},[v._v("计算机基本原理")]),v._v(" "),_("h3",{attrs:{id:"微型计算机系统"}},[v._v("微型计算机系统")]),v._v(" "),_("h4",{attrs:{id:"微机结构"}},[v._v("微机结构")]),v._v(" "),_("p",[v._v("微型计算机指的就是个人计算机")]),v._v(" "),_("p",[v._v("硬件结构：CPU、电源、内存、光驱、光驱数据线、软驱、硬盘、主板、显卡......")]),v._v(" "),_("p",[v._v("主板：独立显卡、"),_("code",[v._v("SATA")]),v._v("口、"),_("code",[v._v("USB")]),v._v("接口、"),_("code",[v._v("IDE")]),v._v("口、主板供电电源"),_("code",[v._v("24pin")])]),v._v(" "),_("p",[v._v("微机结构：中央处理器、输入设备、内存储器、输出设备")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("C_BUS, D_BUS, A_BUS")]),v._v("等总线连接各个设备")])]),v._v(" "),_("h4",{attrs:{id:"冯诺依曼计算机"}},[v._v("冯诺依曼计算机")]),v._v(" "),_("p",[v._v("冯诺依曼计算机基本结构：CPU、存储器、输入输出设备、总线及接口")]),v._v(" "),_("p",[v._v("CPU组成：算术和逻辑运算单元ALU、地址发生和控制单元、指令译码单元、数据寄存器单元、总线驱动单元、时序控制单元等")]),v._v(" "),_("p",[v._v("存储器：一般指内存")]),v._v(" "),_("ul",[_("li",[v._v("内存：ROM（缓存）、RAM（内存条）")]),v._v(" "),_("li",[v._v("外存：硬盘")])]),v._v(" "),_("p",[v._v("输入输出设备：统称位外部设备，用于实现人机交换")]),v._v(" "),_("p",[v._v("总线及接口")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("计算机总线")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("内部总线：链接CPU内部各个部件")])]),v._v(" "),_("li",[_("p",[v._v("外部总线：又称系统总线，连接计算机主板上各种芯片以及各个接口部件")]),v._v(" "),_("p",[v._v("分为地址总线、数据总线和控制总线三大类")])])])]),v._v(" "),_("li",[_("p",[v._v("接口：外部设备和计算机主机之间作为缓冲部件的中间介质")]),v._v(" "),_("ul",[_("li",[v._v("并行接口：同时并行传输多位数据")]),v._v(" "),_("li",[v._v("串行接口：一位接一位传输")])])])]),v._v(" "),_("p",[v._v("冯诺依曼计算机特点：")]),v._v(" "),_("ul",[_("li",[v._v("程序和数据放在同一个存储器中，两者都可以送到CPU执行")]),v._v(" "),_("li",[v._v("存储器按地址访问")]),v._v(" "),_("li",[v._v("指令由操作码和地址码构成，实现存取")]),v._v(" "),_("li",[v._v("以运算器为中心，输入输出设备都要经过CPU和存储器进行数据传送")])]),v._v(" "),_("h4",{attrs:{id:"微处理器"}},[v._v("微处理器")]),v._v(" "),_("p",[v._v("微处理器：分为执行部件"),_("code",[v._v("EU")]),v._v("和总线接口部件"),_("code",[v._v("BIU")])]),v._v(" "),_("p",[_("code",[v._v("EU")]),v._v("（execution unit）")]),v._v(" "),_("ul",[_("li",[v._v("运算器的算术逻辑运算单元ALU")]),v._v(" "),_("li",[v._v("通用寄存器组")]),v._v(" "),_("li",[v._v("标志寄存器FLAGS")]),v._v(" "),_("li",[v._v("EC单元控制系统等")])]),v._v(" "),_("p",[_("code",[v._v("BIU")]),v._v("（Bus Interface Unit）")]),v._v(" "),_("ul",[_("li",[v._v("段寄存器组："),_("code",[v._v("CS、DS、ES、SS")])]),v._v(" "),_("li",[v._v("指令指针寄存器"),_("code",[v._v("IP")])]),v._v(" "),_("li",[v._v("指令队列单元")]),v._v(" "),_("li",[v._v("地址加法器")]),v._v(" "),_("li",[v._v("总线控制系统等")])]),v._v(" "),_("h3",{attrs:{id:"_80x86寄存器"}},[v._v("80X86寄存器")]),v._v(" "),_("blockquote",[_("p",[v._v("Register")])]),v._v(" "),_("h4",{attrs:{id:"_8086寄存器组"}},[v._v("8086寄存器组")]),v._v(" "),_("blockquote",[_("p",[v._v("intel8086、80286都是16位的寄存器，从80386开始寄存器扩展为32位")])]),v._v(" "),_("p",[v._v("数据寄存器："),_("code",[v._v("AX,BX,CX,DX")])]),v._v(" "),_("p",[v._v("地址寄存器："),_("code",[v._v("SI,DI;SP,BP")])]),v._v(" "),_("p",[v._v("段寄存器："),_("code",[v._v("CS,DS,ES,SS")])]),v._v(" "),_("p",[v._v("控制寄存器："),_("code",[v._v("IP;FLAGS")])]),v._v(" "),_("h4",{attrs:{id:"数据寄存器"}},[v._v("数据寄存器")]),v._v(" "),_("p",[v._v("包括"),_("code",[v._v("AX,BX,CX,DX")]),v._v("四个16位通用寄存器")]),v._v(" "),_("p",[_("code",[v._v("AX(accumulator)")]),v._v("：作为累加器用，算术运算的主要寄存器")]),v._v(" "),_("p",[_("code",[v._v("BX(base)")]),v._v("：基址寄存器")]),v._v(" "),_("p",[_("code",[v._v("CX(count)")]),v._v("：计数器")]),v._v(" "),_("p",[_("code",[v._v("DX(data)")]),v._v("：双精度运算时与AX一起存放双操作数")]),v._v(" "),_("p",[v._v("当存放双操作数时，"),_("code",[v._v("AX")]),v._v("存放低字，"),_("code",[v._v("DX")]),v._v("存放高字，在"),_("code",[v._v("AX")]),v._v("中，"),_("code",[v._v("AH")]),v._v("存放高位，"),_("code",[v._v("AL")]),v._v("存放低位，"),_("code",[v._v("DX")]),v._v("同理，"),_("code",[v._v("DH")]),v._v("存放高位，"),_("code",[v._v("DL")]),v._v("存放低位")]),v._v(" "),_("h4",{attrs:{id:"地址寄存器"}},[v._v("地址寄存器")]),v._v(" "),_("p",[v._v("地址寄存器包括指针和变址寄存器（"),_("code",[v._v("SI,DI,SP,BP")]),v._v("），用于存放存储器的偏移地址")]),v._v(" "),_("ul",[_("li",[v._v("也可以用作通用寄存器")]),v._v(" "),_("li",[v._v("严格来说，用来存放存储器偏移地址的寄存器都应该叫地址寄存器，如BX基址寄存器、IP指令指针寄存器等")])]),v._v(" "),_("p",[_("code",[v._v("SI(Source Index)")]),v._v("：源变址寄存器，用于存放源缓冲区的偏移地址")]),v._v(" "),_("p",[_("code",[v._v("DI(Destination Index)")]),v._v("：目的变址寄存器，用于存放目的缓冲区的偏移地址")]),v._v(" "),_("p",[_("code",[v._v("SP(Stack Pointer)")]),v._v("：堆栈指针寄存器，用于指出堆栈区栈顶的偏移地址")]),v._v(" "),_("p",[_("code",[v._v("BP(Base Pointer)")]),v._v("：基址指针寄存器，用于指出堆栈区某个单元的偏移地址")]),v._v(" "),_("h4",{attrs:{id:"段寄存器"}},[v._v("段寄存器")]),v._v(" "),_("p",[_("code",[v._v("CS(Code Segment)")]),v._v("：代码段寄存器")]),v._v(" "),_("p",[_("code",[v._v("DS(Data Segment)")]),v._v("：数据段寄存器")]),v._v(" "),_("p",[_("code",[v._v("ES(Extra Segment)")]),v._v("：附加段寄存器")]),v._v(" "),_("p",[_("code",[v._v("SS(Stack Segment)")]),v._v("：堆栈段寄存器")]),v._v(" "),_("h4",{attrs:{id:"控制寄存器"}},[v._v("控制寄存器")]),v._v(" "),_("p",[_("code",[v._v("IP(Instruction Pointer)")]),v._v("：指令指针寄存器，用来存放代码段中的偏移地址，指出当前正在执行指令的下一条指令所在单元的偏移地址")]),v._v(" "),_("p",[_("code",[v._v("FLAGS")]),v._v("：标志寄存器，其中某位代表CPU的一个标志，表示CPU的某种执行状态")]),v._v(" "),_("ul",[_("li",[v._v("作用：作为加减运算和逻辑运算的辅助结果；构成各种条件，实现程序分支")])]),v._v(" "),_("h4",{attrs:{id:"标志寄存器"}},[v._v("标志寄存器")]),v._v(" "),_("p",[v._v("最低为："),_("code",[v._v("D0")])]),v._v(" "),_("p",[v._v("最高位："),_("code",[v._v("D15")])]),v._v(" "),_("p",[v._v("共有9个标志，分别为6个条件码标志和3个控制标志")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("标志位")]),v._v(" "),_("th",[v._v("标志")]),v._v(" "),_("th",[v._v("值为1")]),v._v(" "),_("th",[v._v("值为0")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("进位标志")]),v._v(" "),_("td",[_("code",[v._v("CF(carry flag)")])]),v._v(" "),_("td",[_("code",[v._v("CY")])]),v._v(" "),_("td",[_("code",[v._v("CN")])])]),v._v(" "),_("tr",[_("td",[v._v("进位标志")]),v._v(" "),_("td",[_("code",[v._v("SF(symbol flag)")])]),v._v(" "),_("td",[_("code",[v._v("NG")])]),v._v(" "),_("td",[_("code",[v._v("PL")])])]),v._v(" "),_("tr",[_("td",[v._v("零标志")]),v._v(" "),_("td",[_("code",[v._v("ZF(zero flag)")])]),v._v(" "),_("td",[_("code",[v._v("ZR")])]),v._v(" "),_("td",[_("code",[v._v("NZ")])])]),v._v(" "),_("tr",[_("td",[v._v("溢出标志")]),v._v(" "),_("td",[_("code",[v._v("OF(overflow flag)")])]),v._v(" "),_("td",[_("code",[v._v("OV")])]),v._v(" "),_("td",[_("code",[v._v("NV")])])]),v._v(" "),_("tr",[_("td",[v._v("辅助进位标志")]),v._v(" "),_("td",[_("code",[v._v("AF(assistant flag)")])]),v._v(" "),_("td",[_("code",[v._v("AC")])]),v._v(" "),_("td",[_("code",[v._v("NA")])])]),v._v(" "),_("tr",[_("td",[v._v("奇偶标志")]),v._v(" "),_("td",[_("code",[v._v("PF(parity flag)")])]),v._v(" "),_("td",[_("code",[v._v("PE")])]),v._v(" "),_("td",[_("code",[v._v("PO")])])]),v._v(" "),_("tr",[_("td",[v._v("方向标志")]),v._v(" "),_("td",[_("code",[v._v("DF(direction flag)")])]),v._v(" "),_("td",[_("code",[v._v("DN")])]),v._v(" "),_("td",[_("code",[v._v("UP")])])]),v._v(" "),_("tr",[_("td",[v._v("中断标志")]),v._v(" "),_("td",[_("code",[v._v("IF(interrupt flag)")])]),v._v(" "),_("td",[_("code",[v._v("EI")])]),v._v(" "),_("td",[_("code",[v._v("DI")])])]),v._v(" "),_("tr",[_("td",[v._v("陷阱标志")]),v._v(" "),_("td",[_("code",[v._v("TF")])]),v._v(" "),_("td"),v._v(" "),_("td")])])]),v._v(" "),_("p",[v._v("溢出：两带符号二进制数相加，负负加为正，正正加为负，这样的情况称为溢出")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("OF=1")])]),v._v(" "),_("li",[v._v("处理器在判断时其实判断的是最高位和次高位是否同时进位。若同时进位则溢出")])]),v._v(" "),_("h3",{attrs:{id:"内存储器"}},[v._v("内存储器")]),v._v(" "),_("blockquote",[_("p",[v._v("简称内存")])]),v._v(" "),_("p",[v._v("存储器被分为若干存储单元，从0开始编号")]),v._v(" "),_("ul",[_("li",[v._v("如一个存储器有128个存储单元，则编号从0~127")])]),v._v(" "),_("h4",{attrs:{id:"存储单元"}},[v._v("存储单元")]),v._v(" "),_("p",[v._v("存储单元分为")]),v._v(" "),_("ul",[_("li",[v._v("字节单元（8位）")]),v._v(" "),_("li",[v._v("字单元（16位）")]),v._v(" "),_("li",[v._v("双字单元（32位）")])]),v._v(" "),_("p",[v._v("在存储器中进行表示时")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("(3075AH) = 12H")]),v._v("："),_("code",[v._v("3075AH")]),v._v("号单元中的内容是"),_("code",[v._v("12H")])]),v._v(" "),_("li",[_("code",[v._v("(307692H) = 5678H")]),v._v("：表示"),_("code",[v._v("307692,307693")]),v._v("两个单元一起存放"),_("code",[v._v("5678H")])])]),v._v(" "),_("p",[v._v("在存放时，高字节放在高地质单元，低字节放在低地址单元")]),v._v(" "),_("h4",{attrs:{id:"存储单元容量"}},[v._v("存储单元容量")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("1KB = 1024B")])]),v._v(" "),_("li",[_("code",[v._v("1MB = 1024KB")])]),v._v(" "),_("li",[_("code",[v._v("1GB = 1024MB")])]),v._v(" "),_("li",[_("code",[v._v("1TB = 1024GB")])])]),v._v(" "),_("h4",{attrs:{id:"cpu对存储器的读写"}},[v._v("CPU对存储器的读写")]),v._v(" "),_("p",[v._v("CPU进行数据读写需要和芯片进行三类信息的交互")]),v._v(" "),_("ul",[_("li",[v._v("地址信息：存储单元的地址")]),v._v(" "),_("li",[v._v("控制信息：器件的选择，读或写命令")]),v._v(" "),_("li",[v._v("数据信息：读写的数据")])]),v._v(" "),_("p",[v._v("CPU和芯片的交互用导线传输：称为总线")]),v._v(" "),_("p",[v._v("逻辑上划分为")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("地址总线：CPU通过地址总线指定存储单元，地址总线上传输的信息数为CPU能够寻址的存储单元数")]),v._v(" "),_("p",[v._v("若有N根地址总线，则可寻找2^N个存储单元")])]),v._v(" "),_("li",[_("p",[v._v("数据总线")]),v._v(" "),_("p",[v._v("数据总线的宽度决定了CPU和外界数据的传输速度")])]),v._v(" "),_("li",[_("p",[v._v("控制总线")]),v._v(" "),_("p",[v._v("读信号输出控制线负责由CPU向外传送读信号")]),v._v(" "),_("p",[v._v("写信号输出控制线负责由CPU向外传送写信号")])])]),v._v(" "),_("h4",{attrs:{id:"物理地址和逻辑地址"}},[v._v("物理地址和逻辑地址")]),v._v(" "),_("blockquote",[_("p",[v._v("Address")])]),v._v(" "),_("h5",{attrs:{id:"地址"}},[v._v("地址")]),v._v(" "),_("p",[v._v("在"),_("code",[v._v("80x86")]),v._v("系统中一个存储单元只存放8位二进制数，称为字节单元")]),v._v(" "),_("p",[v._v("一根地址线可以传输两种信号，即0/1")]),v._v(" "),_("p",[v._v("两根地址线可以传输四种信号，"),_("code",[v._v("00,01,10,11")])]),v._v(" "),_("p",[v._v("以此类推，n根地址线可以传输2^n个信号，也就是说可以传输2^n个存储单元地址")]),v._v(" "),_("h5",{attrs:{id:"物理地址"}},[v._v("物理地址")]),v._v(" "),_("p",[v._v("内存单元的真实地址，存储单元的物理地址是唯一的")]),v._v(" "),_("p",[_("code",[v._v("8086CPU")]),v._v("有20根地址线，因此其存储空间可达2^20字节单元，采用十六进制表示的物理地址范围是"),_("code",[v._v("00000H~FFFFFH")])]),v._v(" "),_("h5",{attrs:{id:"逻辑地址"}},[v._v("逻辑地址")]),v._v(" "),_("p",[v._v("用户编程时使用的地址，分为段地址和偏移地址两部分")]),v._v(" "),_("p",[v._v("在"),_("code",[v._v("8086")]),v._v("汇编语言中，把内存地址空间划分为若干逻辑段，每段由一些存储单元构成")]),v._v(" "),_("ul",[_("li",[v._v("段地址和偏移地址都是十六位二进制数")]),v._v(" "),_("li",[v._v("逻辑地址形式："),_("code",[v._v("段地址:偏移地址")])])]),v._v(" "),_("h5",{attrs:{id:"逻辑地址与物理地址的转换"}},[v._v("逻辑地址与物理地址的转换")]),v._v(" "),_("p",[_("code",[v._v("物理地址 = 段地址x10H+偏移地址")])]),v._v(" "),_("h3",{attrs:{id:"存储器分段"}},[v._v("存储器分段")]),v._v(" "),_("h4",{attrs:{id:"分段的概念"}},[v._v("分段的概念")]),v._v(" "),_("p",[_("code",[v._v("8086CPU")]),v._v("的地址寄存器只有16位。如果直接从地址寄存器中发出地址信号，所能访问的存储空间只有2^16=64k，达不到20位地址线所提供的地址范围")]),v._v(" "),_("p",[v._v("将存储器划分为若干逻辑段，每段最多"),_("code",[v._v("64k")]),v._v("字节单元")]),v._v(" "),_("ul",[_("li",[v._v("逻辑段大小可变，最少16个字节单元，最大65536个字节单元")])]),v._v(" "),_("p",[v._v("段地址和偏移地址构成逻辑地址："),_("code",[v._v("[段地址]:[偏移地址]")])]),v._v(" "),_("p",[v._v("在存储器中，规定每16个字节单元为一小段，小段的第一个单元的物理地址为小段的首地址")]),v._v(" "),_("ul",[_("li",[v._v("首地址的特点是十六进制表示的物理地址的最低位都是0（段地址x10，末位必为0）")]),v._v(" "),_("li",[v._v("末单元的最低位都是F（每段16位，从0开始）")]),v._v(" "),_("li",[v._v("所以我们将首地址除以10，记为逻辑地址，这样就可以用16位寄存器进行存储，即保存有意义的高四位16进制数")])]),v._v(" "),_("h4",{attrs:{id:"段的类型"}},[v._v("段的类型")]),v._v(" "),_("p",[v._v("逻辑段分为四类")]),v._v(" "),_("ul",[_("li",[v._v("代码段："),_("code",[v._v("CS:IP")])]),v._v(" "),_("li",[v._v("数据段："),_("code",[v._v("DS:BX/SI/DI")])]),v._v(" "),_("li",[v._v("附加段："),_("code",[v._v("ES:BX/SI/DI")])]),v._v(" "),_("li",[v._v("堆栈段："),_("code",[v._v("SS:SP/BP")])])]),v._v(" "),_("p",[v._v("上述为物理地址的表示方式："),_("code",[v._v("[段地址寄存器]:[偏移地址寄存器]")])]),v._v(" "),_("h4",{attrs:{id:"堆栈"}},[v._v("堆栈")]),v._v(" "),_("blockquote",[_("p",[_("code",[v._v("LIFO：Last In First Out")])])]),v._v(" "),_("p",[v._v("先进先出的原则，上子弹和下子弹的过程")]),v._v(" "),_("h3",{attrs:{id:"进入计算机"}},[v._v("进入计算机")]),v._v(" "),_("h4",{attrs:{id:"调试工具debug"}},[v._v("调试工具DEBUG")]),v._v(" "),_("h5",{attrs:{id:"debug命令"}},[v._v("DEBUG命令")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("DEBUG命令")]),v._v(" "),_("th",[v._v("作用")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("R")]),v._v(" "),_("td",[v._v("查看和修改寄存器")])]),v._v(" "),_("tr",[_("td",[v._v("D")]),v._v(" "),_("td",[v._v("查看内存单元")])]),v._v(" "),_("tr",[_("td",[v._v("E")]),v._v(" "),_("td",[v._v("修改内存单元")])]),v._v(" "),_("tr",[_("td",[v._v("U")]),v._v(" "),_("td",[v._v("反汇编")])]),v._v(" "),_("tr",[_("td",[v._v("T")]),v._v(" "),_("td",[v._v("单步执行")])]),v._v(" "),_("tr",[_("td",[v._v("G")]),v._v(" "),_("td",[v._v("连续执行命令，跳转")])]),v._v(" "),_("tr",[_("td",[v._v("A")]),v._v(" "),_("td",[v._v("输入汇编指令")])]),v._v(" "),_("tr",[_("td",[v._v("Q")]),v._v(" "),_("td",[v._v("推出")])])])]),v._v(" "),_("h5",{attrs:{id:"进入dos"}},[v._v("进入DOS")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("DOS命令")]),v._v(" "),_("th",[v._v("作用")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("cd\\")]),v._v(" "),_("td",[v._v("返回根目录")])]),v._v(" "),_("tr",[_("td",[v._v("dir")]),v._v(" "),_("td",[v._v("显示文件列表")])]),v._v(" "),_("tr",[_("td",[v._v("cd dir")]),v._v(" "),_("td",[v._v("进入文件夹dir")])]),v._v(" "),_("tr",[_("td",[v._v("cd ..")]),v._v(" "),_("td",[v._v("返回上一目录")])]),v._v(" "),_("tr",[_("td",[v._v("e:")]),v._v(" "),_("td",[v._v("进入e盘")])]),v._v(" "),_("tr",[_("td",[v._v("cls")]),v._v(" "),_("td",[v._v("清屏")])])])]),v._v(" "),_("h5",{attrs:{id:"进入debug"}},[v._v("进入DEBUG")]),v._v(" "),_("p",[v._v("R命令：")]),v._v(" "),_("ul",[_("li",[v._v("直接键入，将显示CPU所有寄存器和标志位")]),v._v(" "),_("li",[v._v("R后跟写寄存器名，将先显示寄存器内容，在冒号后可键入新的值")])]),v._v(" "),_("p",[v._v("E命令：")]),v._v(" "),_("ul",[_("li",[v._v("格式：E 起始地址 修改值 修改值 ……")]),v._v(" "),_("li",[v._v("可以一次改写多个存储单元的内容")])]),v._v(" "),_("h2",{attrs:{id:"指令系统和寻址方式"}},[v._v("指令系统和寻址方式")]),v._v(" "),_("h3",{attrs:{id:"汇编语言指令"}},[v._v("汇编语言指令")]),v._v(" "),_("h4",{attrs:{id:"机器指令"}},[v._v("机器指令")]),v._v(" "),_("p",[v._v("也称作代码指令，是计算机能识别的一组二进制代码")]),v._v(" "),_("p",[v._v("将数7送到AL中")]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("1011 0000 0000 0111B\nB007H\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br")])]),_("p",[v._v("把数3与AL相加放在AL中")]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("0000 0100 0000 0011B\n0403H\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br")])]),_("p",[v._v("把AL中的内容送到地址为5的存储单元中")]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("1010 0010 0101 0000 0000 0000B\nA25000H\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br")])]),_("h4",{attrs:{id:"汇编指令"}},[v._v("汇编指令")]),v._v(" "),_("p",[v._v("上述三个命令简化为")]),v._v(" "),_("div",{staticClass:"language-assembly line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("mov al,7\nadd al,3\nmov ds:[5],al\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br"),_("span",{staticClass:"line-number"},[v._v("3")]),_("br")])]),_("p",[v._v("实际上就是一个代码到机器码的映射")]),v._v(" "),_("h5",{attrs:{id:"指令格式"}},[v._v("指令格式")]),v._v(" "),_("p",[v._v("汇编指令由操作码字段和操作数字段构成")]),v._v(" "),_("ul",[_("li",[v._v("操作码字段：类英文单词的助记符，知名操作数的性质")]),v._v(" "),_("li",[v._v("操作数字段：被操作的数据的值或数据的位置")])]),v._v(" "),_("p",[v._v("指令根据操作数个数分为")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("单操作数指令，如")]),v._v(" "),_("p",[v._v("inc ax")]),v._v(" "),_("p",[v._v("push ax")]),v._v(" "),_("p",[v._v("jmp let")])]),v._v(" "),_("li",[_("p",[v._v("双操作数指令，如")]),v._v(" "),_("p",[v._v("mov ax,7")]),v._v(" "),_("p",[v._v("add ax,bx")])]),v._v(" "),_("li",[_("p",[v._v("三操作数指令（"),_("code",[v._v("80386")]),v._v("指令）："),_("code",[v._v("imul ebx,[esi],7")])])]),v._v(" "),_("li",[_("p",[v._v("无操作数指令，如")]),v._v(" "),_("p",[v._v("cbw：字节转换为字指令")]),v._v(" "),_("p",[v._v("hlt：停机")]),v._v(" "),_("p",[v._v("aaa：加法进位")]),v._v(" "),_("p",[v._v("aam：乘法进位")])])]),v._v(" "),_("h5",{attrs:{id:"指令属性"}},[v._v("指令属性")]),v._v(" "),_("p",[v._v("指令长度：分为单字节、双字节、三字节、四字节和多字节指令等")]),v._v(" "),_("p",[v._v("指令执行时间，以CPU时钟周期为单位")]),v._v(" "),_("h4",{attrs:{id:"指令系统-2"}},[v._v("指令系统")]),v._v(" "),_("p",[v._v("指令系统指计算机所能执行的各种代码指令的集合")]),v._v(" "),_("p",[v._v("指令分类")]),v._v(" "),_("ul",[_("li",[v._v("数据传送指令")]),v._v(" "),_("li",[v._v("算术运算指令")]),v._v(" "),_("li",[v._v("逻辑运算指令")]),v._v(" "),_("li",[v._v("字符串处理指令")]),v._v(" "),_("li",[v._v("控制与转移指令")]),v._v(" "),_("li",[v._v("处理机控制指令")])]),v._v(" "),_("h3",{attrs:{id:"指令的存取"}},[v._v("指令的存取")]),v._v(" "),_("p",[v._v("通过"),_("code",[v._v("CS")]),v._v("和"),_("code",[v._v("IP")]),v._v("寄存器来存取指令："),_("code",[v._v("[cs]:[ip]")])]),v._v(" "),_("p",[_("code",[v._v("CS")]),v._v("代码段寄存器存放代码的段地址")]),v._v(" "),_("p",[_("code",[v._v("IP")]),v._v("指令指针寄存器存放代码的偏移地址")]),v._v(" "),_("p",[v._v("取指过程")]),v._v(" "),_("ol",[_("li",[v._v("从"),_("code",[v._v("CS:IP")]),v._v("指向内存单元读取指令，进入指令缓冲区")]),v._v(" "),_("li",[_("code",[v._v("IP = IP+当前读取指令长度")]),v._v("，指向下一条指令")]),v._v(" "),_("li",[v._v("执行指令，转到1，重复步骤")])]),v._v(" "),_("h3",{attrs:{id:"指令的寻址方式"}},[v._v("指令的寻址方式")]),v._v(" "),_("h4",{attrs:{id:"立即寻址方式"}},[v._v("立即寻址方式")]),v._v(" "),_("p",[v._v("操作数直接写在指令中，这样的操作数也被称为立即数")]),v._v(" "),_("div",{staticClass:"language-assembly line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("mov ax,3060H\nmov al,5\nmov bl,0FFH\nmov bx,0A46DH\nmov ch,23\nmov dx,55H\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br"),_("span",{staticClass:"line-number"},[v._v("3")]),_("br"),_("span",{staticClass:"line-number"},[v._v("4")]),_("br"),_("span",{staticClass:"line-number"},[v._v("5")]),_("br"),_("span",{staticClass:"line-number"},[v._v("6")]),_("br")])]),_("h4",{attrs:{id:"寄存器寻址方式"}},[v._v("寄存器寻址方式")]),v._v(" "),_("p",[v._v("操作数在寄存器中，指令中指定寄存器名")]),v._v(" "),_("p",[v._v("八位寄存器："),_("code",[v._v("AH,AL,BH,BL,CH,CL,DH,CL")])]),v._v(" "),_("p",[v._v("十六位寄存器："),_("code",[v._v("AX,BX,CX,DX,SI,DI,BP,SP")])]),v._v(" "),_("div",{staticClass:"language-assembly line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("mov ax,bx\nadd bx,2233H ;目的操作数是寄存器寻址\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br")])]),_("h4",{attrs:{id:"存储器寻址方式"}},[v._v("存储器寻址方式")]),v._v(" "),_("p",[v._v("操作数放在内存中，通过段地址+有效地址的形式寻址从内存中取出操作数")]),v._v(" "),_("h5",{attrs:{id:"直接寻址方式"}},[v._v("直接寻址方式")]),v._v(" "),_("p",[v._v("将操作数的有效地址直接写在指令中")]),v._v(" "),_("ul",[_("li",[v._v("适用于处理单个变量")])]),v._v(" "),_("div",{staticClass:"language-assembly line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("mov ax,ds:[2000H]\nmov ds:[4000H],ax\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br")])]),_("p",[v._v("其中"),_("code",[v._v("2000H")]),v._v("为有效地址（偏移地址），即从"),_("code",[v._v("ds")]),v._v("段后"),_("code",[v._v("2000H")]),v._v("的地方取出操作数")]),v._v(" "),_("p",[v._v("写操作同理")]),v._v(" "),_("p",[v._v("直接寻址还可以使用符号地址的形式，即为存储单元的偏移地址定义成一个名字（符号地址）")]),v._v(" "),_("div",{staticClass:"language-assembly line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("value equ 1000H\nmov ax, value\nmov ax, [value]\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br"),_("span",{staticClass:"line-number"},[v._v("3")]),_("br")])]),_("p",[v._v("若"),_("code",[v._v("DS=1500H")]),v._v("，则"),_("code",[v._v("物理地址 = DS*10H+EA = 15000H+1000H = 16000H")]),v._v("，计算机从内存存储单元编号为"),_("code",[v._v("16000H")]),v._v("的位置取出操作数")]),v._v(" "),_("h5",{attrs:{id:"寄存器间接寻址方式"}},[v._v("寄存器间接寻址方式")]),v._v(" "),_("p",[v._v("有效地址用寄存器存储，同样是通过"),_("code",[v._v("段地址:偏移地址")]),v._v("的形式寻址")]),v._v(" "),_("ul",[_("li",[v._v("适用于简单的表格处理")])]),v._v(" "),_("div",{staticClass:"language-assembly line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("mov ax,[bx]\nmov ax,[bp]\nmov SS:[DI],AX\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br"),_("span",{staticClass:"line-number"},[v._v("3")]),_("br")])]),_("p",[v._v("这里的偏移地址有默认的段地址，所以可以省略")]),v._v(" "),_("p",[v._v("寄存器"),_("code",[v._v("BX,SI,DI")]),v._v("默认的段寄存器为"),_("code",[v._v("DS")])]),v._v(" "),_("p",[v._v("寄存器"),_("code",[v._v("BP")]),v._v("默认的段寄存器为"),_("code",[v._v("SS")])]),v._v(" "),_("p",[v._v("这四个寄存器"),_("code",[v._v("BX,SI,DI,BP")]),v._v("也被称为间址寄存器")]),v._v(" "),_("h5",{attrs:{id:"寄存器相对寻址方式"}},[v._v("寄存器相对寻址方式")]),v._v(" "),_("p",[v._v("综合了直接寻址和间接寻址，即同时用寄存器和立即数存储偏移地址")]),v._v(" "),_("ul",[_("li",[v._v("用于查表操作")])]),v._v(" "),_("p",[v._v("这五条指令取得都是同一个操作数，位置在"),_("code",[v._v("DS:BX+1234H")])]),v._v(" "),_("div",{staticClass:"language-assembly line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("top equ 1234H\nmov ax,top[bx]\nmov ax,[bx+top]\nmov ax,[bx+1234H]\nmov ax,[bx].1234H\nmov ax,1234H[bx]\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br"),_("span",{staticClass:"line-number"},[v._v("3")]),_("br"),_("span",{staticClass:"line-number"},[v._v("4")]),_("br"),_("span",{staticClass:"line-number"},[v._v("5")]),_("br"),_("span",{staticClass:"line-number"},[v._v("6")]),_("br")])]),_("h5",{attrs:{id:"基址变址寻址方式"}},[v._v("基址变址寻址方式")]),v._v(" "),_("p",[v._v("用两个寄存器来存储操作数的偏移地址")]),v._v(" "),_("ul",[_("li",[v._v("用于二维表的处理")])]),v._v(" "),_("div",{staticClass:"language-assembly line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("mov ax,[bx+di]\nmov ax,[ax][di]\n\nmov [bp+si],ax\nmov [bp][si],ax\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br"),_("span",{staticClass:"line-number"},[v._v("3")]),_("br"),_("span",{staticClass:"line-number"},[v._v("4")]),_("br"),_("span",{staticClass:"line-number"},[v._v("5")]),_("br")])]),_("p",[v._v("上下二者均等效，找的物理地址分别为")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("DS*10H + BX + DI")])]),v._v(" "),_("li",[_("code",[v._v("SS*10H + BP + SI")])])]),v._v(" "),_("h5",{attrs:{id:"相对基址变址寻址方式"}},[v._v("相对基址变址寻址方式")]),v._v(" "),_("p",[v._v("通过两个寄存器+一个立即数来存储偏移地址")]),v._v(" "),_("p",[v._v("下列三条命令均等效")]),v._v(" "),_("div",{staticClass:"language-assembly line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("value equ 1234H\nmov ax,[bx+si+1234h]\nmov ax,[bx][si].value\nmov ax,1234h[bx+si]\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br"),_("span",{staticClass:"line-number"},[v._v("3")]),_("br"),_("span",{staticClass:"line-number"},[v._v("4")]),_("br")])]),_("p",[v._v("物理地址在基址变址寻址的基础上多加一个立即数")])])}),[],!1,null,null,null);_.default=d.exports}}]);