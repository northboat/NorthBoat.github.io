(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{1646:function(v,_,l){"use strict";l.r(_);var i=l(1),P=Object(i.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"计网简答"}},[v._v("计网简答")]),v._v(" "),_("p",[v._v("1、互联网中，从主机浏览器到服务器的 Web 服务之间，存在几级寻址？这些寻址机制分别是什么？为什么需要多级寻址？")]),v._v(" "),_("ul",[_("li",[v._v("三级寻址：物理、逻辑、端口")]),v._v(" "),_("li",[v._v("物理寻址负责本地网络寻址；逻辑寻址为通过网络边界的寻址；端口寻址负责处理将报文传送给计算机特定进程")]),v._v(" "),_("li",[v._v("多层寻址是因为网络是多个物理网络异构形成，在不同网络中由不同的寻址方式，数据链路层是物理网络的寻址，逻辑寻址可以寻址到主机，要寻址到具体的进程还需要端口寻址")])]),v._v(" "),_("p",[v._v("2、在 OSI 的 7 层网络模型中，哪几层存在流量控制？这些流量控制的原理分别是什么？为什么要在多层进行流量控制？")]),v._v(" "),_("ul",[_("li",[v._v("数据链路层，网络层，传输层\n"),_("ul",[_("li",[v._v("数据链路层：采用滑动窗口机制")]),v._v(" "),_("li",[v._v("网络层：采用 ICMP 的源抑制报文")]),v._v(" "),_("li",[v._v("传输层：接收方在每次确认报文中都会捎带一个接收窗口大小来进行发送方的流量控制")])])]),v._v(" "),_("li",[v._v("多层流量控制是因为：在 OSI 模型中，么一层都是一个相对独立的实体，对等实体之间的流量控制要求并不相同，所以需要多层流量控制")])]),v._v(" "),_("p",[v._v("3、数据链路层已有差错控制，为什么传输层仍然需要差错控制，分析其原因")]),v._v(" "),_("ul",[_("li",[v._v("数据链路层的差错控制是节点到节点之间的，保证向上层提供的数据是无差错的")]),v._v(" "),_("li",[v._v("而数据链路层的上层为网络层，是不可靠的，会出现数据丢失、出错等情况，所以需要在传输层来提供端到端的差错控制可靠服务")]),v._v(" "),_("li",[v._v("这样能保证向上层（应用层）提交的数据无误且按序，所以两层的差错控制各有功能，缺一不可，并不冲突")])]),v._v(" "),_("p",[v._v("4、简述慢启动和拥塞控制原理，并画出阈值为 16 的示意图")]),v._v(" "),_("ul",[_("li",[v._v("慢启动：在主机刚刚开始发送报文段时可先将拥塞窗口 cwnd 设置为1一个最大报文段 MSS 的数值，在每收到一个对新的报文段的确认后，将拥塞窗口增加至多一个 MSS 的数值")]),v._v(" "),_("li",[v._v("拥塞避免：党拥塞窗口之大于慢启动门限时，停止使用慢开始算法而改用拥塞避免算法，使发送的拥塞窗口每经过一个 RTT 仅增加一个 MSS 的大小")])]),v._v(" "),_("p",[v._v("5、简述当前 Web 邮箱登录采用了哪些安全机制？并简述传输层安全机制原理")]),v._v(" "),_("ul",[_("li",[v._v("服务器部署 SSL 证书确保用户适用 Web 登录邮箱时的邮件信息安全")]),v._v(" "),_("li",[v._v("适用客户端证书用于 Web 方式登录的强身份认证，代替不安全的用户名和密码认证")]),v._v(" "),_("li",[v._v("邮件回接收服务器和发送服务器部署 SSL 证书确保链路安全")]),v._v(" "),_("li",[v._v("适用客户端证书实现 Web 方式和电子邮件客户端软件方式的电子邮件加密和数字签名")])]),v._v(" "),_("p",[v._v("6、简述 DNS 的两种工作模式原理")]),v._v(" "),_("ul",[_("li",[v._v("递归查询：本地域名服务器只需向跟服务器查询一次，后面几次查询都递归的在其他几个域名服务器之间进行，并最终由本地域名服务器返回给主机")]),v._v(" "),_("li",[v._v("迭代查询：本地域名服务器向各级域名服务器进行查询，各级域名服务器要么给出所查询 IP，要么指定下一步应该查询那个服务器，最后将 IP 地址返回给主机")])]),v._v(" "),_("p",[v._v("7、简述 ISO/RM 参考模型和 TCP/IP 体系结构的异同")]),v._v(" "),_("ul",[_("li",[v._v("共同点\n"),_("ul",[_("li",[v._v("都采取分层的体系结构，将庞大且复杂的问题划分为若干较容易处理的、范围较小的问题，且分层的功能也大体相似")]),v._v(" "),_("li",[v._v("二者都基于独立的协议栈的概念")]),v._v(" "),_("li",[v._v("都可以解决异构网络的互联，实现世界上不同厂家生产的计算机之间的通信")])])]),v._v(" "),_("li",[v._v("不同点\n"),_("ul",[_("li",[v._v("OSI 参考模型明确的定义了三个主要概念：服务、协议和接口，这和面向对象程序设计的思想非常吻合；而 TCP 模型中并未明确区分，不符合软件工程的思想")]),v._v(" "),_("li",[v._v("OSI 在网络层支持无连接和面向连接的通信，在传输层只支持面向连接的通信；TCP/IP 模型在网络层仅支持无连接的通信，而在传输层支持无连接和面向连接的通信")]),v._v(" "),_("li",[v._v("OSI 在设计时，先出现的分层的概念，而对协议的功能实现在哪一层并不明晰；而 TCP/IP 设计时，协议已经出现，于是分层是按照协议功能进行划分的")])])])]),v._v(" "),_("p",[v._v("8、简述主机 1 向主机 2 发送数据时 ARP 协议的工作过程（二者在同一局域网）")]),v._v(" "),_("ul",[_("li",[v._v("主机 1 需要知道主机 2 的 MAC 地址，于是先根据主机 2 的 IP 地址在本机本地的 ARP 缓冲表内查找，若找到其 MAC 地址，则将 MAC 填入帧中，并发送给主机 2")]),v._v(" "),_("li",[v._v("若本地 ARP 缓冲表没找到主机 2 的 MAC，主机 1 将广播 ARP 询问报文")]),v._v(" "),_("li",[v._v("由于在同一局域网，主机 2 将收到主机 1 广播的 ARP 询问报文，将根据询问者的 IP 和 MAC 立即向主机 1 回送一个 ARP 响应报文，其中包含其自身的 MAC 地址")]),v._v(" "),_("li",[v._v("主机 1 收到该响应报文，从而得知主机 2 的 MAC 地址，于是可以开始通信")])]),v._v(" "),_("p",[v._v("9、简述 OSPF 路由协议的工作原理和优缺点")]),v._v(" "),_("ul",[_("li",[v._v("工作原理：向自治系统内所有路由器发送信息，发送的是链路状态，链路状态变化时才采用洪泛法发送，基于"),_("strong",[v._v("链路状态路由算法")])]),v._v(" "),_("li",[v._v("优点\n"),_("ul",[_("li",[v._v("每个路由节点独立计算，不依赖中间节点")]),v._v(" "),_("li",[v._v("收敛速度快（RIP 有慢收敛问题），良好的安全性")]),v._v(" "),_("li",[v._v("链路状态算法规模可扩展性强")])])]),v._v(" "),_("li",[v._v("缺点：算法复杂，设备性能要求高，路由负载均衡能力弱")])]),v._v(" "),_("p",[v._v("10、请依照 TCP/IP 体系结构列出使用 PC 的浏览器访问"),_("code",[v._v("baidu.com")]),v._v("时各层使用到的网络协议")]),v._v(" "),_("ul",[_("li",[v._v("应用层：HTTP，DNS")]),v._v(" "),_("li",[v._v("传输层：TCP，UDP")]),v._v(" "),_("li",[v._v("网络层：IP，ARP，NAT")]),v._v(" "),_("li",[v._v("数据链路层：PPP，HDLC")])]),v._v(" "),_("p",[v._v("11、列举三种主要的实现差错控制的自动重传请求机制（ARQ），并简要介绍")]),v._v(" "),_("ul",[_("li",[v._v("停止等待 ARQ：发送方每发送一帧就要等待接收方应答信号才能发送下一帧，发送方每次只能发送一帧，效率很低，发送窗口、接收窗口均为 1")]),v._v(" "),_("li",[v._v("后退 N 帧 GBN ARQ：发送方连续发送帧，若对帧采用 m 比特进行编号，则发送窗口最大为 2^m-1，接收方采用累计确认，并且只按序接收，接收窗口为 1")]),v._v(" "),_("li",[v._v("选择重传 SR ARQ：发送窗口和接收窗口最大值均为 2^(m-1)，每个帧对应一个计时器，超时则重传。接收方会接收序号不连续但在接收窗口内的帧，对出错的帧会发送 NAK 帧要求发送方重传")])]),v._v(" "),_("p",[v._v("12、简述 CSMA/CD 的工作原理")]),v._v(" "),_("ul",[_("li",[v._v("先听后发，边听边发，冲突停发，随即延迟后重发")]),v._v(" "),_("li",[v._v("发送数据前，先侦听信道是否空闲，若空闲立即发送数据，若忙碌则等待一段时间至信道中信息传输结束后再发送数据")]),v._v(" "),_("li",[v._v("若上一段信息发送结束后，同时有多个节点都提出发送请求，则判定为冲突，若侦听到冲突，则立即停止发送数据，等待一段随机事件，再重新尝试")])]),v._v(" "),_("p",[v._v("13、简述 TCP/IP 网络模型从下至上由哪五层组成，各层主要功能是什么？")]),v._v(" "),_("ul",[_("li",[v._v("物理层：负责光/电信号的传递")]),v._v(" "),_("li",[v._v("数据链路层：负责设备之间数据帧的传送和识别")]),v._v(" "),_("li",[v._v("网络层：负责地址管理和路由选择，主机之间的数据传输")]),v._v(" "),_("li",[v._v("传输层：负责主机端到端之间的数据传输")]),v._v(" "),_("li",[v._v("应用层：负责应用程序间沟通")])]),v._v(" "),_("p",[v._v("14、说明 IP 地址和硬件地址的区别，为什么要使用这两种不同的地址？")]),v._v(" "),_("ul",[_("li",[v._v("区别\n"),_("ul",[_("li",[v._v("字节位置不同：IP 地址放在 IP 数据报首部，硬件地址放在 MAC 帧的首部")]),v._v(" "),_("li",[v._v("作用层不同：网络层及以上使用 IP 地址，数据链路层及以下使用 MAC 地址")]),v._v(" "),_("li",[v._v("IP 地址由 32 位构成（IPv6 为 128 位），MAC 地址由 48 位构成")])])]),v._v(" "),_("li",[v._v("为什么要使用两种地址（分别从封装和拆封的角度考虑）\n"),_("ul",[_("li",[v._v("在因特网中，IP 地址唯一标识每个主机（或路由器），但在传输数据时，使用 IP 地址的 IP 数据报向下要交给数据链路层，并且被封装成 MAC 帧，而 MAC 帧在物理网络（如局域网）中传送使用的是 MAC 地址")]),v._v(" "),_("li",[v._v("连接在通信链路上的设备在接收 MAC 帧时，根据的是帧首部的硬件地址。只有在剥去帧首部和尾部后将 MAC 层的数据上交给网络层，网络层才能在 IP 数据报中找到源 IP 地址和目的 IP 地址")])])])]),v._v(" "),_("p",[v._v("15、简述虚电路和数据报交换的特点")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("交换方式")]),v._v(" "),_("th",[v._v("特点")]),v._v(" "),_("th",[v._v("优点")]),v._v(" "),_("th",[v._v("缺点")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("虚电路")]),v._v(" "),_("td",[v._v("在数据传输之前必须通过虚呼叫设置一条虚电路，它适用于两端之间长时间的数据交换")]),v._v(" "),_("td",[v._v("可靠、保持顺序")]),v._v(" "),_("td",[v._v("如有故障，则经过故障点的数据将全部丢失")])]),v._v(" "),_("tr",[_("td",[v._v("数据报")]),v._v(" "),_("td",[v._v("将报文分片，每个报文可单独进行路由选择，并在目的地重新组成报文")]),v._v(" "),_("td",[v._v("如有故障可绕过故障点")]),v._v(" "),_("td",[v._v("不能保证按需到达，丢失不能立即知晓")])])])]),v._v(" "),_("p",[v._v("16、在数据链路层 ARQ 滑动窗空协议中，序列号是模 2^m，请简述 GBN ARQ 协议的发送窗口最大值是多少，为什么捏？")]),v._v(" "),_("ul",[_("li",[v._v("最大值是 2^m-1")]),v._v(" "),_("li",[v._v("原因是：如果发送窗口值大于最大值，假设为 2^m，则会出现区分不开新帧和旧帧的情况（都编号为 0，不妨举一个例子说明）")])]),v._v(" "),_("p",[v._v("17、CSMA/CD 中为什么要限定数据中的最小长度？标准以太网的最小帧长是多少比特")]),v._v(" "),_("ul",[_("li",[v._v("因为 CSMA/CD 受传播时延的影响较大，因此只有在一个 RTT 内没有冲突才能说明数据传播过程中没有冲突，为了确保在发送数据的同时能检测到可能存在的冲突，需要在发送完帧之前就能收到自己发送出去数据的确认帧，所以出现最小帧的限制")]),v._v(" "),_("li",[v._v("标准以太网的最小帧长为：64B（18B 定长首部和尾部，数据部分最少 46B，最大 1500B）")])]),v._v(" "),_("h2",{attrs:{id:"加密算法简述"}},[v._v("加密算法简述")]),v._v(" "),_("p",[v._v("1、DES / 二重 DES / 两密钥的三重 DES / 三密钥的三重 DES")]),v._v(" "),_("p",[v._v("2、AES")]),v._v(" "),_("p",[v._v("3、RSA")]),v._v(" "),_("p",[v._v("4、Rabin")]),v._v(" "),_("p",[v._v("5、Diffie-Hellman 密钥协商")]),v._v(" "),_("p",[v._v("6、基于椭圆曲线的 ElGamal 签名方案")]),v._v(" "),_("p",[v._v("7、Schnorr 签名体制")]),v._v(" "),_("p",[v._v("8、DSA 签名体制")])])}),[],!1,null,null,null);_.default=P.exports}}]);