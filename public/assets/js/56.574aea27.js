(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{1040:function(s,t,v){s.exports=v.p+"assets/img/logo.f9ade9c2.png"},1041:function(s,t,v){s.exports=v.p+"assets/img/name.8687943e.png"},1042:function(s,t,v){s.exports=v.p+"assets/img/image-20230329131817840.99ad9a5d.png"},1043:function(s,t,v){s.exports=v.p+"assets/img/image-20230329131355139.da00633d.png"},1044:function(s,t,v){s.exports=v.p+"assets/img/image-20230329131424464.5781d568.png"},1045:function(s,t,v){s.exports=v.p+"assets/img/experiment_one.1f804c29.png"},1472:function(s,t,v){"use strict";v.r(t);var _=v(1),n=Object(_.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("img",{attrs:{src:v(1040)}}),s._v(" "),t("img",{attrs:{src:v(1041)}}),s._v(" "),t("h2",{attrs:{id:"目的及原理"}},[s._v("目的及原理")]),s._v(" "),t("h3",{attrs:{id:"实验目的"}},[s._v("实验目的")]),s._v(" "),t("p",[s._v("掌握PC机中断处理系统的基本原理")]),s._v(" "),t("p",[s._v("学会编写中断服务程序")]),s._v(" "),t("p",[s._v("实验电路如图，直接用手动产单脉冲作为中断请求信号（只需连接一根导线），要求每按一次开关产生一次中断，在屏幕上显示"),t("code",[s._v("NEUQ 2023!If Winter comes,can Spring be far behind?")])]),s._v(" "),t("img",{attrs:{src:v(1042)}}),s._v(" "),t("p",[s._v("实验环境")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("Tpc-zk-II")]),s._v("集成开发环境")]),s._v(" "),t("li",[s._v("微机原理与接口技术实验箱")])]),s._v(" "),t("h3",{attrs:{id:"实验原理"}},[s._v("实验原理")]),s._v(" "),t("p",[s._v("系统上电时，ROM BIOS对8259A的主片和从片要执行初始化命令、惊醒初始化操作")]),s._v(" "),t("img",{attrs:{src:v(1043)}}),s._v(" "),t("p",[s._v("中断向量和中断向量表")]),s._v(" "),t("img",{attrs:{src:v(1044)}}),s._v(" "),t("p",[s._v("CPU 获取中断类型码的方法")]),s._v(" "),t("ul",[t("li",[s._v("CPU内部中断时，由硬件电路自动提供")]),s._v(" "),t("li",[s._v("软中断INT n在指令的代码中提供")]),s._v(" "),t("li",[s._v("可屏蔽的外中断INTR通过硬件（8259A）提供")])]),s._v(" "),t("p",[s._v("对于 PC/AT 及 286 以上微机内又扩展了一片 8259 中断控制，IRQ2 用于两片 8259 之间级连，对外可以提供 16 个中断源")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("中断源")]),s._v(" "),t("th",[s._v("中断类型号")]),s._v(" "),t("th",[s._v("中断功能")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("IRQ0")]),s._v(" "),t("td",[s._v("08H")]),s._v(" "),t("td",[s._v("时钟")])]),s._v(" "),t("tr",[t("td",[s._v("IRQ1")]),s._v(" "),t("td",[s._v("09H")]),s._v(" "),t("td",[s._v("键盘")])]),s._v(" "),t("tr",[t("td",[s._v("IRQ2")]),s._v(" "),t("td",[s._v("0AH")]),s._v(" "),t("td",[s._v("保留")])]),s._v(" "),t("tr",[t("td",[s._v("IRQ3")]),s._v(" "),t("td",[s._v("0BH")]),s._v(" "),t("td",[s._v("串行口2")])]),s._v(" "),t("tr",[t("td",[s._v("IRQ4")]),s._v(" "),t("td",[s._v("0CH")]),s._v(" "),t("td",[s._v("串行口1")])]),s._v(" "),t("tr",[t("td",[s._v("IRQ5")]),s._v(" "),t("td",[s._v("0DH")]),s._v(" "),t("td",[s._v("硬盘")])]),s._v(" "),t("tr",[t("td",[s._v("IRQ6")]),s._v(" "),t("td",[s._v("0EH")]),s._v(" "),t("td",[s._v("软盘")])]),s._v(" "),t("tr",[t("td",[s._v("IRQ7")]),s._v(" "),t("td",[s._v("0FH")]),s._v(" "),t("td",[s._v("并行打印机")])]),s._v(" "),t("tr",[t("td",[s._v("IRQ8")]),s._v(" "),t("td",[s._v("70H")]),s._v(" "),t("td",[s._v("实时时钟")])]),s._v(" "),t("tr",[t("td",[s._v("IRQ9")]),s._v(" "),t("td",[s._v("71H")]),s._v(" "),t("td",[s._v("用户中断")])]),s._v(" "),t("tr",[t("td",[s._v("IRQ10")]),s._v(" "),t("td",[s._v("72H")]),s._v(" "),t("td",[s._v("保留")])]),s._v(" "),t("tr",[t("td",[s._v("IRQ11")]),s._v(" "),t("td",[s._v("73H")]),s._v(" "),t("td",[s._v("保留")])]),s._v(" "),t("tr",[t("td",[s._v("IRQ12")]),s._v(" "),t("td",[s._v("74H")]),s._v(" "),t("td",[s._v("保留")])]),s._v(" "),t("tr",[t("td",[s._v("IRQ13")]),s._v(" "),t("td",[s._v("75H")]),s._v(" "),t("td",[s._v("协处理器")])]),s._v(" "),t("tr",[t("td",[s._v("IRQ14")]),s._v(" "),t("td",[s._v("76H")]),s._v(" "),t("td",[s._v("硬盘")])]),s._v(" "),t("tr",[t("td",[s._v("IRQ15")]),s._v(" "),t("td",[s._v("77H")]),s._v(" "),t("td",[s._v("保留")])])])]),s._v(" "),t("h2",{attrs:{id:"实验步骤及分析"}},[s._v("实验步骤及分析")]),s._v(" "),t("p",[s._v("1、连接仪器")]),s._v(" "),t("p",[s._v("插上实验箱电源，"),t("code",[s._v("USB")]),s._v("接口连接主机，连接实验箱"),t("code",[s._v("总线/MIRQx")]),s._v("和"),t("code",[s._v("单脉冲1/正脉冲")]),s._v("，开启实验箱电源，在"),t("code",[s._v("Tpc-zk-II集成开发环境")]),s._v("中进行硬件检测")]),s._v(" "),t("p",[s._v("2、编写汇编代码")]),s._v(" "),t("p",[s._v("experiment_one.asm")]),s._v(" "),t("div",{staticClass:"language-assembly line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("data segment\n    info db 'NEUQ 2023!if Winter comes,can Spring be far behind?', 0ah, 0ah, '$'\ndata ends\ncode segment\nassume cs:code, ds:data\nstart:\n    mov ax,cs\n    mov ds,ax\n    mov dx,offset int3\n    mov ah,25h\n    mov al,0bh\n    int 21h\n    in al,21h\n    and al,0f7h\n    out 21h,al\nhere:jmp here\nint3 proc\n    push ax\n    push ds\n    push dx\n    sti\n    mov ax,data\n    mov ds,ax\n    mov dx,offset info\n    mov ah,9\n    int 21h\n    mov al,20h\n    out 20h,al\n    cli\n    pop dx\n    pop ds\n    pop ax\n    iret\nint3 endp\ncode ends\nend start\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br")])]),t("p",[s._v("编译运行")]),s._v(" "),t("p",[s._v("3、实验结果")]),s._v(" "),t("p",[s._v("每次按下单脉冲开关将在屏幕上显示")]),s._v(" "),t("img",{attrs:{src:v(1045)}}),s._v(" "),t("h2",{attrs:{id:"实验心得"}},[s._v("实验心得")]),s._v(" "),t("p",[s._v("事先检查各种插线是否稳固，如"),t("code",[s._v("USB")]),s._v("接口，电路板是否插稳（会亮灯指示），实验前在"),t("code",[s._v("IDE")]),s._v("中不要少硬件检测这一步骤，"),t("code",[s._v("IDE")]),s._v("对于汇编代码的报错详细到行，认真仔细检查即可")])])}),[],!1,null,null,null);t.default=n.exports}}]);