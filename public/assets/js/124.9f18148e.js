(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{1395:function(v,_,l){"use strict";l.r(_);var i=l(1),t=Object(i.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"应用层概述"}},[v._v("应用层概述")]),v._v(" "),_("blockquote",[_("p",[v._v("一个选择题")])]),v._v(" "),_("p",[v._v("每个应用层协议用于解决某一类应用文题，规定应用进程之间通信时所遵循的协议")]),v._v(" "),_("ul",[_("li",[v._v("DNS")]),v._v(" "),_("li",[v._v("FTP")]),v._v(" "),_("li",[v._v("Email")]),v._v(" "),_("li",[v._v("WWW")]),v._v(" "),_("li",[v._v("DHCP")])]),v._v(" "),_("h2",{attrs:{id:"域名系统-dns"}},[v._v("域名系统 DNS")]),v._v(" "),_("p",[v._v("上网时使用域名，需要解析成 IP，DNS 实现域名到 IP 的映射")]),v._v(" "),_("p",[v._v("互联网采用层次树状结构的命名方法，每一级以点号隔开，根在最后，如"),_("code",[v._v("www.baidu.com")]),v._v("，com 是一级域名，baidu 是二级域名，www 是三级域名")]),v._v(" "),_("p",[v._v("域名服务器（DNS）管辖的范围叫做区（zone）")]),v._v(" "),_("ul",[_("li",[v._v("根域名服务器：最高的、最重要的服务器，用于解析所有的顶级域名服务器的域名和 IP 地址，任何一台主机若在本地无法解析域名，首先找到的就是根域名服务器")]),v._v(" "),_("li",[v._v("顶级域名服务器（TLD）：解析二级域名，给出回答或下一步要查找的服务器 IP")]),v._v(" "),_("li",[v._v("权限域名服务器：负责一个区的域名服务器（域名的派出所）")]),v._v(" "),_("li",[v._v("本地域名服务器，也叫默认域名服务器，需要配置")])]),v._v(" "),_("p",[v._v("域名的解析过程")]),v._v(" "),_("ul",[_("li",[v._v("迭代+递归解析：最常用")]),v._v(" "),_("li",[v._v("递归解析")])]),v._v(" "),_("p",[v._v("迭代+递归解析，本地域名服务器将请求发送给所有域名服务器（根域名+顶级域名+权限域名），同时迭代并更新，找到 IP 后返回给本地 DNS")]),v._v(" "),_("p",[v._v("递归解析即请求只发给根域名 DNS，根域名 DNS 发给顶级域名 DNS，顶级域名 DNS 发给 权限域名 DNS，找到 IP 后递归返回给本地 DNS，不常用，根域名服务器压力太大")]),v._v(" "),_("p",[v._v("提高可靠性和速度的方法")]),v._v(" "),_("ul",[_("li",[v._v("主域名服务器和辅助域名服务器")]),v._v(" "),_("li",[v._v("DNS 维护一个高速缓存，存放最近使用过的 IP 和域名的对应关系")])]),v._v(" "),_("p",[v._v("解析过程")]),v._v(" "),_("p",[v._v("迭代模式")]),v._v(" "),_("ul",[_("li",[v._v("主机：请求只有一次，向本地 DNS")]),v._v(" "),_("li",[v._v("本地 DNS\n"),_("ul",[_("li",[v._v("有缓存：请求 0 次")]),v._v(" "),_("li",[v._v("无缓存：请求 n+1 次，n 表示域名级别（域名级别 = 点号 +1）")])])])]),v._v(" "),_("p",[v._v("递归模式")]),v._v(" "),_("ul",[_("li",[v._v("主机：最少 1 次，最多 1 次")]),v._v(" "),_("li",[v._v("本地 DNS\n"),_("ul",[_("li",[v._v("有缓存：请求 0 次")]),v._v(" "),_("li",[v._v("无缓存：请求 1 次")])])])]),v._v(" "),_("h2",{attrs:{id:"文件传输协议-ftp"}},[v._v("文件传输协议 FTP")]),v._v(" "),_("p",[v._v("最广泛的文件传输协议")]),v._v(" "),_("ul",[_("li",[v._v("提供交互式的访问")]),v._v(" "),_("li",[v._v("屏蔽计算机系统细节，适合于异构网络计算机中文件传输")]),v._v(" "),_("li",[v._v("屏蔽计算机存储数据的格式不同，屏蔽文件的目录结构和文件命名的规定不同")]),v._v(" "),_("li",[v._v("屏蔽操作系统命令不同")]),v._v(" "),_("li",[v._v("屏蔽访问控制方法的不同")])]),v._v(" "),_("p",[v._v("FTP 工作模式")]),v._v(" "),_("ul",[_("li",[v._v("采用 C/S 结构")]),v._v(" "),_("li",[v._v("一个主进程，负责接收请求")]),v._v(" "),_("li",[v._v("若干从属进程，负责处理单个请求")])]),v._v(" "),_("p",[v._v("FTP 的两个连接，这种传输模式也叫"),_("strong",[v._v("带外传送")])]),v._v(" "),_("ul",[_("li",[v._v("控制连接：不传文件，一直开启，提供交互式的访问")]),v._v(" "),_("li",[v._v("数据连接：用于传输用户数据，按序打开")])]),v._v(" "),_("p",[v._v("FTP 两个端口")]),v._v(" "),_("ul",[_("li",[v._v("建立连接请求时访问控制连接端口 21")]),v._v(" "),_("li",[v._v("连接端口 20，进程通过该端口传输数据")])]),v._v(" "),_("p",[v._v("这里需要注意，数据传输端口不一定是 20：若主动打开，则为 20，若是接收方，是二者协商的端口")]),v._v(" "),_("h2",{attrs:{id:"万维网-www"}},[v._v("万维网 WWW")]),v._v(" "),_("p",[v._v("主要作用：让 Web 客户端访问浏览 Web 服务器上的页面")]),v._v(" "),_("p",[v._v("万维网是分布式超媒体(hypermedia)系统，是超文本(hypertext)系统的扩充")]),v._v(" "),_("ul",[_("li",[v._v("统一资源定位符 URL")]),v._v(" "),_("li",[v._v("超文本传输协议 HTTP")]),v._v(" "),_("li",[v._v("万维网文档 HTML")]),v._v(" "),_("li",[v._v("万维网信息检索系统 Google")])]),v._v(" "),_("h3",{attrs:{id:"url"}},[v._v("URL")]),v._v(" "),_("p",[v._v("统一资源定位符，用于表示互联网上的资源位置和访问方法")]),v._v(" "),_("p",[v._v("<协议>://<主机><端口>/<资源>")]),v._v(" "),_("ul",[_("li",[v._v("主机对应 IP 地址")]),v._v(" "),_("li",[v._v("端口对应进程")]),v._v(" "),_("li",[v._v("资源对应文件路径")])]),v._v(" "),_("h3",{attrs:{id:"http"}},[v._v("HTTP")]),v._v(" "),_("p",[v._v("超文本传输协议 HTTP，是一个应用层协议，使用 TCP 连接进行可靠的传送")]),v._v(" "),_("p",[v._v("特点")]),v._v(" "),_("ul",[_("li",[v._v("使用面向连接的 TCP 作为运输层协议，保证数据的可靠传输")]),v._v(" "),_("li",[v._v("HTTP 本身是无连接的，即使他使用了面向连接的 TCP 向上提供的服务，重新打开需要重新加载")]),v._v(" "),_("li",[v._v("是面向食物的客户服务器协议，要么打得开要么打不开")]),v._v(" "),_("li",[v._v("HTTP 1.0 是无状态的，不会保留打开信息")])]),v._v(" "),_("p",[v._v("HTTP 两类报文")]),v._v(" "),_("ul",[_("li",[v._v("请求报文")]),v._v(" "),_("li",[v._v("相应报文")])]),v._v(" "),_("p",[v._v("HTTP 是面向正文的，报文中每个字段都是 ASCII 码串")]),v._v(" "),_("h3",{attrs:{id:"工作过程"}},[v._v("工作过程")]),v._v(" "),_("ul",[_("li",[v._v("浏览器分析页面的 URL")]),v._v(" "),_("li",[v._v("浏览器向本地 DNS 请求解析域名的 IP 地址")]),v._v(" "),_("li",[v._v("DNS 返回 IP 地址")]),v._v(" "),_("li",[v._v("浏览器和服务器（两个进程之间）建立 TCP 连接")]),v._v(" "),_("li",[v._v("浏览器发出命令 Get / Post")]),v._v(" "),_("li",[v._v("服务器给出相应响应")]),v._v(" "),_("li",[v._v("TCP 连接释放")]),v._v(" "),_("li",[v._v("浏览器显示 HTML 中所有文本信息")])]),v._v(" "),_("p",[v._v("该过程使用的协议")]),v._v(" "),_("ul",[_("li",[v._v("首先是 HTTP 协议，超文本传输")]),v._v(" "),_("li",[v._v("请求 DNS 时使用了 UDP 协议")]),v._v(" "),_("li",[v._v("建立连接使用 TCP 协议")]),v._v(" "),_("li",[v._v("数据传输使用 IP 协议")]),v._v(" "),_("li",[v._v("链路层")]),v._v(" "),_("li",[v._v("物理层")])]),v._v(" "),_("p",[v._v("协议分层：HTTP ——> TCP ——> IP")]),v._v(" "),_("p",[v._v("持续连接：每个请求、响应使用同一个 TCP 连接")]),v._v(" "),_("ul",[_("li",[v._v("连接消耗 1 个 RTT，传 n 个内容消耗 n 个 RTT，共 1+n 个 RTT")])]),v._v(" "),_("p",[v._v("非持续连接：每个请求、响应使用单独的 TCP 连接")]),v._v(" "),_("ul",[_("li",[v._v("对于 n 个内容消耗 2n 个 RTT 时间")])]),v._v(" "),_("p",[v._v("非流水线持续连接，必须要等前一个请求确认完毕才发送下一个内容：n+1 个 RTT")]),v._v(" "),_("p",[v._v("流水线持续连接：1+1+(n-1/2) 个 RTT")]),v._v(" "),_("ul",[_("li",[v._v("和计网概述中计算流水线时延一模一样")])]),v._v(" "),_("h2",{attrs:{id:"email-协议"}},[v._v("Email 协议")]),v._v(" "),_("p",[v._v("连接建立均使用的 TCP 协议")]),v._v(" "),_("p",[v._v("发送邮件使用 SMTP 协议，读取/接收邮件使用 POP3 或 IMAP 协议")]),v._v(" "),_("p",[v._v("共分为三个阶段")]),v._v(" "),_("ul",[_("li",[v._v("客户端通过 TCP 连接发送邮件到中转 SMTP 服务器")]),v._v(" "),_("li",[v._v("中转 SMTP 服务器作为客户端将收到的邮件发送到目的 SMTP 服务器")]),v._v(" "),_("li",[v._v("目的 SMTP 服务器通过 POP3 服务器将邮件送到指定用户并且用户使用 POP3 协议对邮件进行解析")])]),v._v(" "),_("p",[v._v("SMTP 是一种 push 协议，有就立即往外推，只支持传输 7 比特的 ASCII 码内容")]),v._v(" "),_("p",[v._v("POP 是一种 pull 协议，始终将数据从服务器拉到本地")]),v._v(" "),_("p",[v._v("MIME：增加翻译结构，转化非 ASCII 码和 ASCII 码")]),v._v(" "),_("h2",{attrs:{id:"动态主机配置协议-dhcp"}},[v._v("动态主机配置协议 DHCP")]),v._v(" "),_("blockquote",[_("p",[v._v("Dynamic Host Configuration Protocol")])]),v._v(" "),_("p",[v._v("这种机制允许一台计算机加入新的网络和自动获取 IP 地址，而不需要手动配置")]),v._v(" "),_("p",[v._v("工作过程：广播请求，单播响应")]),v._v(" "),_("ul",[_("li",[v._v("需要 IP 地址的主机广播一个"),_("strong",[v._v("发现报文")]),v._v("，成为 DHCP 客户")]),v._v(" "),_("li",[v._v("因为是广播，本地网络上所有住居都会收到该报文，但只有 DHCP 服务器会回应")])]),v._v(" "),_("p",[v._v("DHCP 服务器处理过程")]),v._v(" "),_("ul",[_("li",[v._v("先从其数据库中查找请求计算机的配置信息，若找到直接返回，若没找到，则从未被分配的地址中找一个分配给该计算机")]),v._v(" "),_("li",[v._v("包括 IP 地址、网关、子网掩码")])]),v._v(" "),_("p",[v._v("广播报文")]),v._v(" "),_("ul",[_("li",[v._v("源地址：0.0.0.0")]),v._v(" "),_("li",[v._v("目的地址（广播）：255.255.255.255")])]),v._v(" "),_("p",[v._v("相应报文")]),v._v(" "),_("ul",[_("li",[v._v("源地址：DHCP 服务器 IP")]),v._v(" "),_("li",[v._v("目的地址：分配主机的 IP")])]),v._v(" "),_("p",[v._v("这里对比一下 DHCP 请求响应的网络层 ARP 地址解析协议（IP 到 MAC 的映射）")]),v._v(" "),_("ul",[_("li",[v._v("广播请求\n"),_("ul",[_("li",[v._v("目的：FFFFFFFFFFFF")]),v._v(" "),_("li",[v._v("源：发送方 MAC")])])]),v._v(" "),_("li",[v._v("单播相应\n"),_("ul",[_("li",[v._v("目的：广播发送方 MAC")]),v._v(" "),_("li",[v._v("源：HDCP 的 MAC 地址")])])])]),v._v(" "),_("h2",{attrs:{id:"常见应用总结"}},[v._v("常见应用总结")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("应用")]),v._v(" "),_("th",[v._v("下层协议")]),v._v(" "),_("th",[v._v("端口号")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("HTTP")]),v._v(" "),_("td",[v._v("TCP")]),v._v(" "),_("td",[v._v("80")])]),v._v(" "),_("tr",[_("td",[v._v("FTP")]),v._v(" "),_("td",[v._v("TCP")]),v._v(" "),_("td",[v._v("20/21")])]),v._v(" "),_("tr",[_("td",[v._v("SMTP")]),v._v(" "),_("td",[v._v("TCP")]),v._v(" "),_("td",[v._v("25")])]),v._v(" "),_("tr",[_("td",[v._v("POP3")]),v._v(" "),_("td",[v._v("TCP")]),v._v(" "),_("td",[v._v("110")])]),v._v(" "),_("tr",[_("td",[v._v("TEINET")]),v._v(" "),_("td",[v._v("TCP")]),v._v(" "),_("td",[v._v("23")])]),v._v(" "),_("tr",[_("td",[v._v("BGP-4")]),v._v(" "),_("td",[v._v("TCP")]),v._v(" "),_("td",[v._v("179")])]),v._v(" "),_("tr",[_("td",[v._v("DNS")]),v._v(" "),_("td",[v._v("UDP")]),v._v(" "),_("td",[v._v("53")])]),v._v(" "),_("tr",[_("td",[v._v("DHCP")]),v._v(" "),_("td",[v._v("UDP")]),v._v(" "),_("td",[v._v("67")])]),v._v(" "),_("tr",[_("td",[v._v("RIP")]),v._v(" "),_("td",[v._v("UDP")]),v._v(" "),_("td",[v._v("520")])]),v._v(" "),_("tr",[_("td",[v._v("PING")]),v._v(" "),_("td",[v._v("IP")]),v._v(" "),_("td",[v._v("/")])])])])])}),[],!1,null,null,null);_.default=t.exports}}]);