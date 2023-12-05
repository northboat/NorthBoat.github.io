(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{1702:function(_,v,t){"use strict";t.r(v);var l=t(1),i=Object(l.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h2",{attrs:{id:"文件"}},[_._v("文件")]),_._v(" "),v("h3",{attrs:{id:"文件概述"}},[_._v("文件概述")]),_._v(" "),v("p",[_._v("文件：放于外存，具有文件名的相关信息的集合；长久存放于外存；文件是输入输出的基本单位，对文件的操作由操作系统的文件系统提供")]),_._v(" "),v("p",[_._v("文件系统的基本概念（相当于一个数据表）")]),_._v(" "),v("ul",[v("li",[_._v("数据项：字段，列\n"),v("ul",[v("li",[_._v("基本数据项")]),_._v(" "),v("li",[_._v("组合数据项")])])]),_._v(" "),v("li",[_._v("记录：行")]),_._v(" "),v("li",[_._v("属性：文件（表）的属性\n"),v("ul",[v("li",[_._v("文件名：字符型，由用户命名，包括主文件名和扩展名")]),_._v(" "),v("li",[_._v("标识符：用于系统识别文件")]),_._v(" "),v("li",[_._v("类型：扩展名体现")]),_._v(" "),v("li",[_._v("大小：以字节计量")]),_._v(" "),v("li",[_._v("位置：外存地址")]),_._v(" "),v("li",[_._v("建立 / 修改时间")]),_._v(" "),v("li",[_._v("存放方式：权限，读写等")])])])]),_._v(" "),v("p",[_._v("文件分类")]),_._v(" "),v("p",[_._v("按用途分类")]),_._v(" "),v("ul",[v("li",[_._v("系统文件")]),_._v(" "),v("li",[_._v("用户文件")]),_._v(" "),v("li",[_._v("库文件：如 C 的"),v("code",[_._v("std.io.h")]),_._v("，本质上也属于系统文件，为用户变成提供方便")])]),_._v(" "),v("p",[_._v("按文件中的数据类型分类")]),_._v(" "),v("ul",[v("li",[_._v("源文件：.cpp")]),_._v(" "),v("li",[_._v("目标文件：.obj")]),_._v(" "),v("li",[_._v("可执行文件：.exe")])]),_._v(" "),v("p",[_._v("按存取控制属性分类")]),_._v(" "),v("ul",[v("li",[_._v("只执行文件")]),_._v(" "),v("li",[_._v("只读文件")]),_._v(" "),v("li",[_._v("读写文件")]),_._v(" "),v("li",[_._v("可读可写可执行文件")])]),_._v(" "),v("p",[_._v("按组织形式和处理方式分类")]),_._v(" "),v("ul",[v("li",[_._v("普通文件：用于存储信息/程序")]),_._v(" "),v("li",[_._v("目录文件：用于检索")]),_._v(" "),v("li",[_._v("特殊文件：IO 设备对应文件，用于设备管理（硬件软化）")])]),_._v(" "),v("h3",{attrs:{id:"元数据和索引结点"}},[_._v("元数据和索引结点")]),_._v(" "),v("h4",{attrs:{id:"元数据"}},[_._v("元数据")]),_._v(" "),v("p",[_._v("元数据：文件的"),v("strong",[_._v("属性类数据")]),_._v("（另一类为文件内容对应的数据），元数据主要用于编制目录，方便检索文件，"),v("strong",[_._v("用户操作文件前必须获得该文件的元数据")])]),_._v(" "),v("p",[_._v("元数据的更改保存于"),v("strong",[_._v("日志文件")])]),_._v(" "),v("ul",[v("li",[_._v("系统重启时去查日志而非文件系统，缩短系统恢复时间")]),_._v(" "),v("li",[_._v("日志文件还可以用于回滚文件数据")])]),_._v(" "),v("p",[_._v("元数据的管理方式")]),_._v(" "),v("ul",[v("li",[_._v("集中式管理：将所有元数据存储在存储管理节点所在的存储设备，集群文件系统常采用集中式管理\n"),v("ul",[v("li",[_._v("管理简单；一致性维护容易")]),_._v(" "),v("li",[_._v("可靠性差，管理节点失效会造成整个系统瘫痪；操作频率受限，若操作过于频繁将制约系统性能")])])]),_._v(" "),v("li",[_._v("分布式管理：元数据可存放于系统的任意节点且运行动态迁移\n"),v("ul",[v("li",[_._v("可靠性高且操作频率不受限")]),_._v(" "),v("li",[_._v("管理实现复杂，一致性维护较难")])])])]),_._v(" "),v("h4",{attrs:{id:"fcb"}},[_._v("FCB")]),_._v(" "),v("p",[_._v("FCB：文件控制块，用于描述和控制文件的数据结构（参考进程控制模块 PCB，作业控制模块 JCB），文件管理程序借助 FCB 的信息对文件施以各种操作")]),_._v(" "),v("p",[_._v("FCB 包含以下信息")]),_._v(" "),v("ul",[v("li",[_._v("基本信息：文件名；物理位置（外存位置，外存设备名，起始盘块号、所用盘块数、长度）；文件逻辑结构；文件物理结构")]),_._v(" "),v("li",[_._v("存取控制信息：文件主；核准用户；一般用户读、写、执行权限")]),_._v(" "),v("li",[_._v("使用信息：文件建立时间；修改时间；当前使用信息（打开该文件的进程数、是否被所著、是否在内存已被修改未同步至外存）")])]),_._v(" "),v("p",[_._v("通过 FCB 可以感知文件在外存的所有状态，如微软 DOS 的文件控制块（占用 32 B）")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("主文件名")]),_._v(" "),v("th",[_._v("扩展名")]),_._v(" "),v("th",[_._v("属性")]),_._v(" "),v("th",[_._v("备用")]),_._v(" "),v("th",[_._v("时间")]),_._v(" "),v("th",[_._v("日期")]),_._v(" "),v("th",[_._v("第一块号")]),_._v(" "),v("th",[_._v("盘快数")])])]),_._v(" "),v("tbody")]),_._v(" "),v("h4",{attrs:{id:"索引结点"}},[_._v("索引结点")]),_._v(" "),v("blockquote",[v("p",[_._v("基于 FCB")])]),_._v(" "),v("p",[_._v("多级目录允许文件重名，解决了难命名问题，但也意味着一个目录文件中可能要存放大量的 FCB 文件，如一个目录下 100 个文件，这个目录文件就要存 100 个 FCB，3.2 KB")]),_._v(" "),v("p",[_._v("在检索文件时，需要")]),_._v(" "),v("ul",[v("li",[_._v("将目录文件调入内存")]),_._v(" "),v("li",[_._v("在目录中通过文件名查找指定文件")]),_._v(" "),v("li",[_._v("根据 FCB 将文件从外存调入内存")])]),_._v(" "),v("p",[_._v("用于减少目录所占空间，同时提升检索 FCB 速度，于是引入"),v("strong",[_._v("索引结点")])]),_._v(" "),v("ul",[v("li",[_._v("FCB 文件只存储文件名和指向该文件索引结点的指针")]),_._v(" "),v("li",[_._v("索引结点中存储 FCB 中除了文件名的其余属性")])]),_._v(" "),v("p",[_._v("相当于多建立一张索引表，纵向分表存储，将键和属性分开，用指针链接，提高检索效率：文件目录下只存文件名和指针的索引表，索引结点可以存放在任意位置，于是减少了目录所占空间")]),_._v(" "),v("p",[_._v("磁盘索引结点（存放在磁盘的索引节点）：主标识符；类型；存取权限；物理地址；长度；链接次数（文件系统中指向该文件的指针数）；存取时间")]),_._v(" "),v("p",[_._v("内存索引结点（存放在内存的索引节点）：索引结点编号；状态（是否上锁、被修改）；访问计数（进程访问结点计数）；逻辑设备号；链接指针")]),_._v(" "),v("h3",{attrs:{id:"文件操作"}},[_._v("文件操作")]),_._v(" "),v("p",[_._v("创建")]),_._v(" "),v("ul",[v("li",[_._v("为文件建立目录表项（登记）\n"),v("ul",[v("li",[_._v("在目录表新增一行")]),_._v(" "),v("li",[_._v("建立索引结点")])])]),_._v(" "),v("li",[_._v("分配外存空间等")])]),_._v(" "),v("p",[_._v("删除：在目录文件下文件对应的记录增加删除标记；在需要时（空间不够或需要移动）回收文件所占外存空间")]),_._v(" "),v("p",[_._v("打开：通过系统调用完成，如函数"),v("code",[_._v("open(file_name, open_pattern)")])]),_._v(" "),v("ul",[v("li",[_._v("打开时，首先将文件属性复制到内存的"),v("strong",[_._v("打开文件表")]),_._v("的一个条目中")]),_._v(" "),v("li",[_._v("将该条目的编号返回给用户")]),_._v(" "),v("li",[_._v("用户通过内存中的打开文件表访问文件属性，以显著提高操作速度")])]),_._v(" "),v("p",[_._v("读 / 写：通过文件名检索目录，获取文件的外存地址，实施读写")]),_._v(" "),v("ul",[v("li",[_._v("打开的是属性，读写的是内容")])]),_._v(" "),v("p",[_._v("关闭：将该文件在"),v("strong",[_._v("打开文件表")]),_._v("中的条目删除，撤销文件的数据结构，释放内存空间")]),_._v(" "),v("p",[_._v("属性操作")]),_._v(" "),v("ul",[v("li",[_._v("普通文件：修改文件名、文件拥有者、改变文件访问权和查询文件状态等")]),_._v(" "),v("li",[_._v("目录文件：创建目录、删除目录和改变当前目录等")])]),_._v(" "),v("h3",{attrs:{id:"文件保护"}},[_._v("文件保护")]),_._v(" "),v("p",[_._v("对内存的保护：上下界寄存器，越界非法地址等")]),_._v(" "),v("p",[_._v("外存同样需要保护：首先不能越界，另外需要防止非法操作或物理损坏对文件数据造成的破坏")]),_._v(" "),v("p",[_._v("影响文件安全的因素")]),_._v(" "),v("ul",[v("li",[_._v("人为因素：如误删")]),_._v(" "),v("li",[_._v("系统因素：如磁盘故障")]),_._v(" "),v("li",[_._v("自然因素：磁盘数据会随时间的推移逐渐消失，消磁")])]),_._v(" "),v("p",[_._v("安全措施")]),_._v(" "),v("ul",[v("li",[_._v("容错技术：冗余磁盘，多备份\n"),v("ul",[v("li",[_._v("SFT-1 低级容错，备份一份控制信息")]),_._v(" "),v("li",[_._v("SFT-2 中级容错，写后读校验，磁盘镜像")]),_._v(" "),v("li",[_._v("SFT-3 高级容错，基于集群技术")])])]),_._v(" "),v("li",[_._v("后备系统：防止自然因素危险")]),_._v(" "),v("li",[_._v("访问控制：防止人为因素危险")])]),_._v(" "),v("p",[_._v("具有域切换权、复制权、所有权、控制权的访问矩阵")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("域")]),_._v(" "),v("th",[_._v("F1")]),_._v(" "),v("th",[_._v("F2")]),_._v(" "),v("th",[_._v("F3")]),_._v(" "),v("th",[_._v("F4")]),_._v(" "),v("th",[_._v("F5")]),_._v(" "),v("th",[_._v("域D1")]),_._v(" "),v("th",[_._v("域D2")]),_._v(" "),v("th",[_._v("域D3")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("D1")]),_._v(" "),v("td",[_._v("R*")]),_._v(" "),v("td",[_._v("R,W")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("S, Control")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("D2")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("R")]),_._v(" "),v("td",[_._v("W,O")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("S")])]),_._v(" "),v("tr",[v("td",[_._v("D3")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("W")]),_._v(" "),v("td",[_._v("W,E")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td")])])]),_._v(" "),v("ul",[v("li",[_._v("S 表示具有向某域的切换权，如第一行表示 D1 具有向 D2 的切换权，第二行表示 D2 具有向 D3 的切换权")]),_._v(" "),v("li",[_._v("R,W,E 分别表示读、写、执行权限")]),_._v(" "),v("li",[_._v("带*的权限表示可复制权，可以将该权限赋予其他域")]),_._v(" "),v("li",[_._v("O 表示所有权，可以增删该项目在任意域的访问权（在列上随意修改）")]),_._v(" "),v("li",[_._v("Control 表示控制权，图示表示 D2 具有对 D1 行所有权限增删的权限")])]),_._v(" "),v("p",[_._v("可以看到访问矩阵实际上是一个稀疏矩阵，Linux 使用"),v("strong",[_._v("三元组")]),_._v("的方式表示，以节省空间")]),_._v(" "),v("h3",{attrs:{id:"逻辑物理结构"}},[_._v("逻辑物理结构")]),_._v(" "),v("h4",{attrs:{id:"逻辑结构"}},[_._v("逻辑结构")]),_._v(" "),v("p",[_._v("逻辑组织，和设备无关，决定文件的检索速度")]),_._v(" "),v("ul",[v("li",[_._v("无结构文件：流式文件，以字节为单位，一个一个字符存，如源程序、可执行程序、库函数等")]),_._v(" "),v("li",[_._v("有结构文件：记录式文件，用记录描述对象\n"),v("ul",[v("li",[_._v("定长记录：格式化，整齐")]),_._v(" "),v("li",[_._v("不定长记录：常用于商业领域")])])]),_._v(" "),v("li",[_._v("顺序文件：记录按照某种顺序依次排列")]),_._v(" "),v("li",[_._v("索引文件：索引表（关键字，记录长度，磁盘起始位置）")]),_._v(" "),v("li",[_._v("索引顺序文件：将顺序文件分组，每组的第一个记录（首地址）在索引表中占一项，n 个记录的文件")]),_._v(" "),v("li",[_._v("直接文件：散列文件、Hash 文件，Hash 函数和冲突解决办法")])]),_._v(" "),v("h4",{attrs:{id:"物理结构"}},[_._v("物理结构")]),_._v(" "),v("p",[_._v("物理结构和磁盘介质和"),v("strong",[_._v("外存分配方式")]),_._v("相关，通常一个文件系统只采用一种物理结构")]),_._v(" "),v("ul",[v("li",[_._v("连续方式 ——> 顺序结构")]),_._v(" "),v("li",[_._v("连接分配方式 ——> 链接式结构")]),_._v(" "),v("li",[_._v("索引方式 ——> 索引结构")])]),_._v(" "),v("p",[_._v("不同的物理结构对应不同的文件")]),_._v(" "),v("ul",[v("li",[_._v("顺序文件：同一文件物理相邻存放，如文件 y 连续存放于 x，x+1 盘块")]),_._v(" "),v("li",[_._v("链接文件\n"),v("ul",[v("li",[_._v("隐式链接：物理块隐含指针，即每个盘块自己存储的有 next 指针")]),_._v(" "),v("li",[_._v("显式链接：链接各盘块的指针存放在链接表中，成为文件分配表 "),v("strong",[_._v("FAT")])])])]),_._v(" "),v("li",[_._v("索引文件：每个文件对应一个索引表，记录分配给该文件的所有盘块号，单级索引直接记录物理盘块地址，多级索引对页面增加层层管理，如一级引向二级索引表，二级索引表引向物理地址")])]),_._v(" "),v("h2",{attrs:{id:"目录"}},[_._v("目录")]),_._v(" "),v("blockquote",[v("p",[_._v("目录：也是文件，用于管理（检索）文件")])]),_._v(" "),v("h3",{attrs:{id:"目录基本概念"}},[_._v("目录基本概念")]),_._v(" "),v("p",[_._v("解决分类存放以及重名问题，目录，可以是")]),_._v(" "),v("ul",[v("li",[_._v("FCB 的有序集合（FCB 太大，不这么存）")]),_._v(" "),v("li",[_._v("文件名 + inode 的有序集合（基于文件名查找）")])]),_._v(" "),v("p",[_._v("文件作用")]),_._v(" "),v("ul",[v("li",[_._v("按名存取（不能查看内容）")]),_._v(" "),v("li",[_._v("提高文件检索速度")]),_._v(" "),v("li",[_._v("文件共享")]),_._v(" "),v("li",[_._v("运行文件重名")])]),_._v(" "),v("h3",{attrs:{id:"树形目录"}},[_._v("树形目录")]),_._v(" "),v("p",[_._v("最常用的目录结构")]),_._v(" "),v("p",[_._v("根目录")]),_._v(" "),v("ul",[v("li",[_._v("绝对路径")]),_._v(" "),v("li",[_._v("相对路径")])]),_._v(" "),v("p",[_._v("优点：查询速度快，结构层次清晰，方便防护")]),_._v(" "),v("p",[_._v("缺点：路径逐级访问会增加磁盘访问次数，影响查询速度")]),_._v(" "),v("h3",{attrs:{id:"目录操作"}},[_._v("目录操作")]),_._v(" "),v("p",[_._v("创建")]),_._v(" "),v("p",[_._v("删除")]),_._v(" "),v("p",[_._v("改变目录：cd")]),_._v(" "),v("p",[_._v("移动目录：调整目录结构")]),_._v(" "),v("p",[_._v("链接：指定文件可具有多个父目录，便于文件共享")]),_._v(" "),v("p",[_._v("查找")]),_._v(" "),v("h3",{attrs:{id:"硬链接和软链接"}},[_._v("硬链接和软链接")]),_._v(" "),v("p",[_._v("链接的两种方式：静态共享方法")]),_._v(" "),v("p",[_._v("硬链接：基于索引节点的文件共享")]),_._v(" "),v("ul",[v("li",[_._v("将文件名和指向索引节点的指针添加到父目录项中")]),_._v(" "),v("li",[_._v("被硬链接后，文件的索引节点 inode 中引用计数 count 将 +1，只有 count 为 0（即表示文件不被任何父目录指向），此时文件才可被删除")])]),_._v(" "),v("p",[_._v("软链接：基于符号链接，实际上是一个文件，存储的是共享文件的路径")]),_._v(" "),v("p",[_._v("软链接特点")]),_._v(" "),v("ul",[v("li",[_._v("没有悬空指针现象，失效将即使删除")]),_._v(" "),v("li",[_._v("可能误判，因为基于路径，即文件名，不能识别同名文件")]),_._v(" "),v("li",[_._v("时间开销较大")]),_._v(" "),v("li",[_._v("额外空间消耗")]),_._v(" "),v("li",[_._v("方便网络共享：超链接")])]),_._v(" "),v("h2",{attrs:{id:"文件系统"}},[_._v("文件系统")]),_._v(" "),v("h3",{attrs:{id:"文件系统的全局结构"}},[_._v("文件系统的全局结构")]),_._v(" "),v("p",[_._v("文件系统采用层次模型，上对用户，下对设备，这使得文件系统仅需要提供逻辑文件系统和基本 I/O 管理程序")]),_._v(" "),v("p",[_._v("文件系统接口：为用户提供的一组操作文件和记录的方法（上对用户）")]),_._v(" "),v("ul",[v("li",[_._v("命令接口：如 ls，pwd")]),_._v(" "),v("li",[_._v("程序接口")])]),_._v(" "),v("p",[_._v("操纵和管理对象的软件集合（核心层，下对设备），主要功能")]),_._v(" "),v("ul",[v("li",[_._v("文件存储空间管理")]),_._v(" "),v("li",[_._v("目录管理")]),_._v(" "),v("li",[_._v("文件逻辑地址和物理地址转换")]),_._v(" "),v("li",[_._v("文件读写管理")]),_._v(" "),v("li",[_._v("文件共享与保护")])]),_._v(" "),v("p",[_._v("这些软件包括")]),_._v(" "),v("ul",[v("li",[_._v("逻辑文件系统：管理控制 FCB，处理文件系统结构性数据等，得到逻辑块号")]),_._v(" "),v("li",[_._v("基本 I/O 管理程序：和硬件相关，完成逻辑块号到物理块号的转换等")]),_._v(" "),v("li",[_._v("基本文件系统层")]),_._v(" "),v("li",[_._v("I/O 控制层")])]),_._v(" "),v("p",[_._v("对象及其属性：文件；目录；外村存储空间")]),_._v(" "),v("h3",{attrs:{id:"文件系统在内-外存的结构"}},[_._v("文件系统在内 / 外存的结构")]),_._v(" "),v("h4",{attrs:{id:"外存结构"}},[_._v("外存结构")]),_._v(" "),v("p",[_._v("文件去和目录区，文件去用于存放数据信息，目录区存放控制信息，如 FCB")]),_._v(" "),v("p",[_._v("物理盘可以分成多个逻辑盘（卷），逻辑盘可以由多个物理盘组成")]),_._v(" "),v("p",[_._v("外存中不同的存储介质具有不同的文件系统，每个操作系统可以拥有多种文件系统")]),_._v(" "),v("p",[_._v("磁盘文件系统包括")]),_._v(" "),v("ul",[v("li",[_._v("引导控制块（Boot Control Block, BCB）：又称引导块或引导扇区，若磁盘中没操作系统，则为空，否则存储 OS 的引导信息")]),_._v(" "),v("li",[_._v("卷控制块（Volume Control Block, VCB）：又称超级块或主控文件表（Master File Table, MFT），记录卷的盘块数、块容量、空闲块地址和数量、空闲 FCB 地址和数量等")]),_._v(" "),v("li",[_._v("目录结构：用于组织和管理文件")]),_._v(" "),v("li",[_._v("FCB：文件控制块，一个文件对应一个 FCB")])]),_._v(" "),v("h4",{attrs:{id:"内存结构"}},[_._v("内存结构")]),_._v(" "),v("p",[_._v("安装文件系统：即将外存的文件系统调入内存，挂载卷")]),_._v(" "),v("p",[_._v("当操作系统有多种文件系统，使用 VFS（虚拟文件系统）将不同文件系统环境相隔开")]),_._v(" "),v("p",[_._v("文件系统的超级结构块")]),_._v(" "),v("ul",[v("li",[_._v("系统打开文件表（System open File Table, SFT）")]),_._v(" "),v("li",[_._v("进程打开文件表（Process open File Table, PFT）")]),_._v(" "),v("li",[_._v("安装表")]),_._v(" "),v("li",[_._v("缓存")])]),_._v(" "),v("p",[_._v("管理磁盘的目的：合理利用外存空间；提高磁盘 I/O 速度；提高磁盘系统的可靠性")]),_._v(" "),v("h3",{attrs:{id:"外存组织方式"}},[_._v("外存组织方式")]),_._v(" "),v("blockquote",[v("p",[_._v("大题")])]),_._v(" "),v("p",[_._v("文件的外存组织方式决定了文件的物理结构，为了方便管理，操作系统增加“簇”的概念，可包含 2、4、8、16、32、64 个扇区")]),_._v(" "),v("h4",{attrs:{id:"连续方式"}},[_._v("连续方式")]),_._v(" "),v("p",[_._v("每个文件存储于磁盘的一组相邻盘块中（同一柱面）")]),_._v(" "),v("p",[_._v("文件名 + 起始位置 + 文件长度")]),_._v(" "),v("h4",{attrs:{id:"链式方式"}},[_._v("链式方式")]),_._v(" "),v("p",[_._v("隐式链接：文件名 + 起始指针 + 终止指针")]),_._v(" "),v("p",[_._v("显式链接 FAT：文件名 + 起始指针")]),_._v(" "),v("ul",[v("li",[_._v("起始指针在 FAT 链接表寻找后继，直到碰到 EOF 终止符停止")]),_._v(" "),v("li",[_._v("FAT1 / FAT2 属于系统区")])]),_._v(" "),v("h4",{attrs:{id:"fat-方式"}},[_._v("FAT 方式")]),_._v(" "),v("p",[_._v("FAT12：每个表项占 12 字节，1.5 个字（1.5B），同理 FAT32 占 32 字节，4 个字（4B）")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("主文件名最多 8 字符，扩展名最多 3 字符，以盘块为分配单位，最多 4096 个表项（4096x1.5=6044B）")])]),_._v(" "),v("li",[v("p",[_._v("文件的第一个盘块号存在文件的 FCB 中，其余均存储在 FAT 中，以 EOF 结束")])])]),_._v(" "),v("p",[_._v("FAT16：每个表项占 16 字节，2B，磁盘容量可达 2GB（64K簇 x 32KB/簇 = 2GB）")]),_._v(" "),v("p",[_._v("FAT32：每个表项占 4B，磁盘容量可达 2TB")]),_._v(" "),v("p",[_._v("不同扇区大小对应不同 FAT 文件系统的最大分区容量")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("扇区大小")]),_._v(" "),v("th",[_._v("FAT12")]),_._v(" "),v("th",[_._v("FAT16")]),_._v(" "),v("th",[_._v("FAT32")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("512B")]),_._v(" "),v("td",[_._v("2MB")]),_._v(" "),v("td"),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("1KB")]),_._v(" "),v("td",[_._v("4MB")]),_._v(" "),v("td"),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("2KB")]),_._v(" "),v("td",[_._v("8MB")]),_._v(" "),v("td",[_._v("128MB")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("4KB")]),_._v(" "),v("td",[_._v("16MB")]),_._v(" "),v("td",[_._v("256MB")]),_._v(" "),v("td",[_._v("1TB")])]),_._v(" "),v("tr",[v("td",[_._v("8KB")]),_._v(" "),v("td"),_._v(" "),v("td",[_._v("512MB")]),_._v(" "),v("td",[_._v("2TB")])]),_._v(" "),v("tr",[v("td",[_._v("16KB")]),_._v(" "),v("td"),_._v(" "),v("td",[_._v("1GB")]),_._v(" "),v("td",[_._v("2TB")])]),_._v(" "),v("tr",[v("td",[_._v("32KB")]),_._v(" "),v("td"),_._v(" "),v("td",[_._v("2GB")]),_._v(" "),v("td",[_._v("2TB")])])])]),_._v(" "),v("h4",{attrs:{id:"ntfs"}},[_._v("NTFS")]),_._v(" "),v("p",[_._v("全新文件系统：将所有文件信息、目录信息以及可用未分配空间信息均已文件记录的方式存储与主控文件表 Master File Table，主控文件表 MFT 为 NTFS 卷结构中心，记录大小固定为 1KB，每行（记录）都对应一个文件的元数据")]),_._v(" "),v("h4",{attrs:{id:"索引方式"}},[_._v("索引方式")]),_._v(" "),v("p",[_._v("FCB：文件名 + 索引块序号")]),_._v(" "),v("p",[_._v("单级索引：建立一个索引表，每个文件分配一个索引块（这个索引块同样是一个外部磁盘块），索引块中记录的是存储该文件的块的顺序序列，如"),v("code",[_._v("[2,41,23,5,-1,-1,-1,-1]")]),_._v("表示该文件按顺序存放在磁盘块"),v("code",[_._v("2,41,23,5")]),_._v("中")]),_._v(" "),v("ul",[v("li",[_._v("注意每个文件只有一个唯一的索引块，记录了其文件所存储的磁盘块号集合")]),_._v(" "),v("li",[_._v("若一个盘块 1KB，一个盘块记录 4B，则索引块最多记录 256 个盘块，文件最大为 256KB")])]),_._v(" "),v("p",[_._v("二级索引：在这唯一的索引块中，记录的是一级索引块的集合，一级索引块中记录的才是文件内容所存在的磁盘块号的集合")]),_._v(" "),v("ul",[v("li",[_._v("若一个盘块 1KB，一个盘块记录 4B，索引块最多记录 256 个盘块，文件最大为 256x256 = 64MB")])]),_._v(" "),v("p",[_._v("增量式索引：假设一个盘块 4KB，一个文件至少有十个索引盘块，一个盘块号需要 4B 存储空间")]),_._v(" "),v("ul",[v("li",[_._v("当文件小于 40KB，直接使用这十个索引盘块存储文件")]),_._v(" "),v("li",[_._v("当文件较大，除了基础的十个索引盘，外加一个索引盘作一次间址，可以存储最大 1K 个盘块号，此时文件最大容量为 40KB + 1K x 4KB = 4MB + 40KB")]),_._v(" "),v("li",[_._v("更大时，再加一个索引盘作二次间接地址，此时最大容量为 4MB + 40KB + 1K x 1K x 4KB = 4GB + 4MB + 4KB")]),_._v(" "),v("li",[_._v("再大，增加一个索引盘作三次间址...扩大到 4TB")])]),_._v(" "),v("h3",{attrs:{id:"外存空闲空间管理方法"}},[_._v("外存空闲空间管理方法")]),_._v(" "),v("blockquote",[v("p",[_._v("重点")])]),_._v(" "),v("h4",{attrs:{id:"空闲表"}},[_._v("空闲表")]),_._v(" "),v("p",[_._v("用一张表记录所有外存中的空闲区，每个空闲区（一个空闲区包含若干个连续的空闲盘块）对应空闲表中一个表项")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("序号")]),_._v(" "),v("th",[_._v("第一个空闲盘块号")]),_._v(" "),v("th",[_._v("空闲盘块数")])])]),_._v(" "),v("tbody")]),_._v(" "),v("p",[_._v("回收的时候需要考虑空闲区的合并问题")]),_._v(" "),v("p",[_._v("优点：分配速度快，I/O 频率较低")]),_._v(" "),v("p",[_._v("适用：小文件，对换空间，多媒体文件（连续）")]),_._v(" "),v("h4",{attrs:{id:"空闲链表"}},[_._v("空闲链表")]),_._v(" "),v("p",[_._v("隐式的，将所有空闲盘块串成一个链表")]),_._v(" "),v("p",[_._v("特点：链表较长，回收算法很简单")]),_._v(" "),v("p",[_._v("空闲盘区链：链表的一个节点从盘块变成一个盘区，即若干个连续的盘块")]),_._v(" "),v("p",[_._v("也可以使用 FAT 的方式显式管理链表")]),_._v(" "),v("h4",{attrs:{id:"位示图"}},[_._v("位示图")]),_._v(" "),v("p",[_._v("用一个二维数组表示各个盘块的占用情况，1 表示已占用，0 表示空闲，设数组每行 n 个，则盘块号为 m 的盘块在二维数组的坐标为"),v("code",[_._v("bitmap[m/n][m%n]")])]),_._v(" "),v("p",[_._v("在寻找空闲盘块时，顺序寻找位示图（从左往右，从上往下），直到找到连续的大小足够的空闲磁盘，返回其盘块号")]),_._v(" "),v("p",[_._v("当盘块被回收时，位示图置零")]),_._v(" "),v("h4",{attrs:{id:"成组链接"}},[_._v("成组链接")]),_._v(" "),v("p",[_._v("空闲表 + 空闲链表")]),_._v(" "),v("p",[_._v("虚拟文件系统")]),_._v(" "),v("p",[_._v("文件系统挂载")])])}),[],!1,null,null,null);v.default=i.exports}}]);