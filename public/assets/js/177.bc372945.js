(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{1510:function(t,s,a){"use strict";a.r(s);var v=a(1),i=Object(v.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"什么是-totp"}},[t._v("什么是 TOTP？")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://ruanyifeng.com/blog/2017/11/2fa-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("双因素认证（2FA）教程 - 阮一峰的网络日志 (ruanyifeng.com)"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("上文 "),s("a",{attrs:{href:"/docs/sec/auth/2fa/2fa-bank-ukey-auth"}},[t._v("UKEY - 常见安全的 2FA 实现 ")]),t._v("中有提到：USBKEY 的身份认证，即密码 + 某件个人物品的方式，安全但不方便（用户不可能随时携带 UKEY）")]),t._v(" "),s("p",[t._v("相对而言，手机才是最好的替代品。密码 + 手机是当下最佳的双因素认证方案。国内的很多网站要求，用户输入密码时，还要提供短消息发送的验证码，以证明用户确实拥有该手机。但是，短消息是不安全的，容易被拦截和伪造，SIM 卡也可以克隆。已经有"),s("a",{attrs:{href:"http://media.people.com.cn/n/2014/0227/c40606-24477072.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("案例"),s("OutboundLink")],1),t._v("，先伪造身份证，再申请一模一样的手机号码，把钱转走")]),t._v(" "),s("p",[t._v("因此，安全的双因素认证不是密码 + 短消息，而是 TOTP（Time-based One-time Password），它是公认的可靠解决方案，已经写入国际标准 "),s("a",{attrs:{href:"https://tools.ietf.org/html/rfc6238",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC6238"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("GitHub 在 23 年启用了 TOTP 的 2FA 登录，原理如下")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("用户和服务器协商好一份统一的密钥 key")])]),t._v(" "),s("li",[s("p",[t._v("用户本地采用一个计时程序，每 t 秒生成一串定长的短验证码，验证码的生成公式如下\n"),s("section",[s("eqn",[s("span",{staticClass:"katex-display"},[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[s("semantics",[s("mrow",[s("msub",[s("mi",[t._v("H")]),s("mn",[t._v("1")])],1),s("mo",[t._v("=")]),s("mi",[t._v("H")]),s("mi",[t._v("a")]),s("mi",[t._v("s")]),s("mi",[t._v("h")]),s("mo",{attrs:{stretchy:"false"}},[t._v("(")]),s("mi",[t._v("t")]),s("mi",[t._v("i")]),s("mi",[t._v("m")]),s("mi",[t._v("e")]),s("mo",{attrs:{separator:"true"}},[t._v(",")]),s("mi",[t._v("k")]),s("mi",[t._v("e")]),s("mi",[t._v("y")]),s("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\nH_1 = Hash(time, key)\n")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.8333em","vertical-align":"-0.15em"}}),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.08125em"}},[t._v("H")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t vlist-t2"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.3011em"}},[s("span",{staticStyle:{top:"-2.55em","margin-left":"-0.0813em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mtight"},[t._v("1")])])])]),s("span",{staticClass:"vlist-s"},[t._v("​")])]),s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[s("span")])])])])]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),s("span",{staticClass:"mrel"},[t._v("=")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.08125em"}},[t._v("H")]),s("span",{staticClass:"mord mathnormal"},[t._v("a")]),s("span",{staticClass:"mord mathnormal"},[t._v("s")]),s("span",{staticClass:"mord mathnormal"},[t._v("h")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathnormal"},[t._v("t")]),s("span",{staticClass:"mord mathnormal"},[t._v("im")]),s("span",{staticClass:"mord mathnormal"},[t._v("e")]),s("span",{staticClass:"mpunct"},[t._v(",")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03148em"}},[t._v("k")]),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("ey")]),s("span",{staticClass:"mclose"},[t._v(")")])])])])])])],1),t._v("\n其中，time 为当前时间戳，key 为协商好的密钥")])]),t._v(" "),s("li",[s("p",[t._v("在登陆时，系统要求用户输入当前的验证码 H1，后端接收到该登录请求后，将在后端根据当前时间和用户的密钥生成一份验证码 H2")])]),t._v(" "),s("li",[s("p",[t._v("将用户输入的 H1 和后端生成的 H2 作比较，若一致则通过认证，否则拒绝")])])]),t._v(" "),s("p",[t._v("考虑到网络延迟和计算延迟，时间 time 该如何统一呢？其实很简单，通过除法向下取整的方式，举个简单的例子，95 和 107 在除以 30 并且向下取整时，得到的结果均为 3")]),t._v(" "),s("p",[t._v("同理，对于每个时间戳，减去 1970.1.1 日的初始时间得到的时间间隔（以秒为单位），而后除以 30 并取整，则在同一个 30s 内能够得到相同的 time")]),t._v(" "),s("p",[t._v("本文将对这一登录过程进行简单的复现")]),t._v(" "),s("h2",{attrs:{id:"设计"}},[t._v("设计")]),t._v(" "),s("p",[t._v("后端需要实现两个接口：注册和登录，逻辑较为简单")]),t._v(" "),s("ul",[s("li",[t._v("注册时创建用户私钥，服务器数据库需要与用户本地统一")]),t._v(" "),s("li",[t._v("登录时通过比对用户本地哈希值（通过本地时间戳和私钥生成）与服务器哈希值（通过服务器时间和数据库中用户私钥生成）进行认证")])]),t._v(" "),s("h3",{attrs:{id:"数据表设计"}},[t._v("数据表设计")]),t._v(" "),s("p",[s("s",[t._v("数据表设计："),s("code",[t._v("user")])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段名")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("em",[t._v("username")])]),t._v(" "),s("td",[t._v("varchar")]),t._v(" "),s("td",[t._v("用户名")])]),t._v(" "),s("tr",[s("td",[t._v("password")]),t._v(" "),s("td",[t._v("varchar")]),t._v(" "),s("td",[t._v("用户密码")])]),t._v(" "),s("tr",[s("td",[t._v("key")]),t._v(" "),s("td",[t._v("varchar")]),t._v(" "),s("td",[t._v("用户私钥")])])])]),t._v(" "),s("p",[t._v("能用 redis 存吗，我在想，就不用建表了，用一个"),s("code",[t._v("<String, [<String, String>]>")]),t._v("的结构存用户的密码和密钥")]),t._v(" "),s("h3",{attrs:{id:"密钥生成"}},[t._v("密钥生成")]),t._v(" "),s("p",[t._v("注册接口：生成私钥返回给用户，同时将用户名、密码和证书信息写入数据库表")]),t._v(" "),s("p",[t._v("接口说明")]),t._v(" "),s("ul",[s("li",[t._v("URL："),s("code",[t._v("/register")])]),t._v(" "),s("li",[t._v("Method："),s("code",[t._v("Post")])])]),t._v(" "),s("p",[t._v("请求参数")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("示例")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("username")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v('"northboat"')])]),t._v(" "),s("tr",[s("td",[t._v("password")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v('"123456"')])])])]),t._v(" "),s("p",[t._v("返回结果："),s("code",[t._v("res")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("状态码（code）")]),t._v(" "),s("th",[t._v("信息（message）")]),t._v(" "),s("th",[t._v("数据（data）")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("200")])]),t._v(" "),s("td",[s("code",[t._v('"成功"')])]),t._v(" "),s("td",[s("code",[t._v('{"key":"私钥字符串"}')])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("500")])]),t._v(" "),s("td",[s("code",[t._v('"服务器错误"')])]),t._v(" "),s("td",[s("code",[t._v('{"error":"具体错误信息"}')])])])])]),t._v(" "),s("h3",{attrs:{id:"totp-认证实现"}},[t._v("TOTP 认证实现")]),t._v(" "),s("p",[t._v("登录接口：接收用户的签名结果，再通过用户 username 取出数据库中证书对当前时间戳进行签名并与客户端结果比对，进行一重认证，而后对密码进行二重认证")]),t._v(" "),s("p",[t._v("接口说明")]),t._v(" "),s("ul",[s("li",[t._v("URL："),s("code",[t._v("/login")])]),t._v(" "),s("li",[t._v("Method："),s("code",[t._v("Post")])])]),t._v(" "),s("p",[t._v("请求参数")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("示例")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("username")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v('"northboat"')])]),t._v(" "),s("tr",[s("td",[t._v("password")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v('"123456"')])]),t._v(" "),s("tr",[s("td",[t._v("key")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v('"MII56DJKLA..."')])]),t._v(" "),s("tr",[s("td",[t._v("hash")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v('"652156"')])])])]),t._v(" "),s("p",[t._v("返回结果："),s("code",[t._v("res")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("状态码（code）")]),t._v(" "),s("th",[t._v("信息（message）")]),t._v(" "),s("th",[t._v("数据（data）")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("200")])]),t._v(" "),s("td",[s("code",[t._v('"成功"')])]),t._v(" "),s("td",[s("code",[t._v("null")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("200")])]),t._v(" "),s("td",[s("code",[t._v('"失败"')])]),t._v(" "),s("td",[s("code",[t._v('{"error":"具体错误信息"}')])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("500")])]),t._v(" "),s("td",[s("code",[t._v('"服务器错误"')])]),t._v(" "),s("td",[s("code",[t._v('{"error":"具体错误信息"}')])])])])]),t._v(" "),s("p",[t._v("具体过程")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("接受用户传参，先与数据库中密码 password 进行比对，若不一致则返回状态 ②，若一致继续第二因素认证")])]),t._v(" "),s("li",[s("p",[t._v("通过 username 读数据库取出私钥 Key，对以下数据进行签名\n"),s("section",[s("eqn",[s("span",{staticClass:"katex-display"},[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[s("semantics",[s("mrow",[s("mi",[t._v("T")]),s("mi",[t._v("C")]),s("mo",[t._v("=")]),s("mo",{attrs:{stretchy:"false"}},[t._v("(")]),s("msub",[s("mi",[t._v("T")]),s("mrow",[s("mi",[t._v("n")]),s("mi",[t._v("o")]),s("mi",[t._v("w")])],1)],1),s("mo",[t._v("−")]),s("msub",[s("mi",[t._v("T")]),s("mn",[t._v("1970")])],1),s("mo",{attrs:{stretchy:"false"}},[t._v(")")]),s("mi",{attrs:{mathvariant:"normal"}},[t._v("/")]),s("mn",[t._v("30")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\nTC = (T_{now}-T_{1970})/30\n")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.6833em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.07153em"}},[t._v("TC")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),s("span",{staticClass:"mrel"},[t._v("=")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.13889em"}},[t._v("T")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t vlist-t2"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.1514em"}},[s("span",{staticStyle:{top:"-2.55em","margin-left":"-0.1389em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mtight"},[s("span",{staticClass:"mord mathnormal mtight"},[t._v("n")]),s("span",{staticClass:"mord mathnormal mtight"},[t._v("o")]),s("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.02691em"}},[t._v("w")])])])])]),s("span",{staticClass:"vlist-s"},[t._v("​")])]),s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[s("span")])])])])]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),s("span",{staticClass:"mbin"},[t._v("−")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.13889em"}},[t._v("T")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t vlist-t2"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.3011em"}},[s("span",{staticStyle:{top:"-2.55em","margin-left":"-0.1389em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mtight"},[s("span",{staticClass:"mord mtight"},[t._v("1970")])])])])]),s("span",{staticClass:"vlist-s"},[t._v("​")])]),s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[s("span")])])])])]),s("span",{staticClass:"mclose"},[t._v(")")]),s("span",{staticClass:"mord"},[t._v("/30")])])])])])])],1),t._v("\n其中，T 指时间戳，30 是登录码的刷新频率，通过该公式将得到 Hash' = H(Key, TC)")])]),t._v(" "),s("li",[s("p",[t._v("将传入的 Hash 与 Hash' 比对，若不一样，则返回状态 ②，若一样，则认证成功，返回状态 ①")])])]),t._v(" "),s("p",[t._v("这里的 TC 计算是 TOTP 算法的精髓：本地计算 TC 后，将请求打到服务器，服务器会立马计算当前时间戳对应的 TC'，由于向下取整的关系，在 30s 内，本地生成的 TC 和服务器的 TC' 将会保持一致，于是最后生成的哈希值将会一致（在证书一致的前提下）")]),t._v(" "),s("p",[t._v("当然本地和服务器的时间需要是同步的，同时还有少许的网络延迟")]),t._v(" "),s("h3",{attrs:{id:"前端工作"}},[t._v("前端工作")]),t._v(" "),s("p",[t._v("前端需要做的工作如下")]),t._v(" "),s("p",[t._v("注册时")]),t._v(" "),s("ol",[s("li",[t._v("发送表单请求服务器"),s("code",[t._v("register")]),t._v("接口，获取私钥")]),t._v(" "),s("li",[t._v("将获取到的私钥在客户端进行本地 I/O，写作文件"),s("code",[t._v("2fa.cer")])])]),t._v(" "),s("p",[t._v("登录时")]),t._v(" "),s("ol",[s("li",[t._v("本地读取"),s("code",[t._v("2fa.cer")]),t._v("，获得私钥字符串")]),t._v(" "),s("li",[t._v("通过私钥和当前时间戳，生成哈希值")]),t._v(" "),s("li",[t._v("将登录表单连同哈希值请求"),s("code",[t._v("/login")]),t._v("接口")])]),t._v(" "),s("h2",{attrs:{id:"编码"}},[t._v("编码")]),t._v(" "),s("h3",{attrs:{id:"选型"}},[t._v("选型")]),t._v(" "),s("p",[t._v("后端：Springboot、MySQL")]),t._v(" "),s("p",[t._v("前端：Electron（考虑到本地文件 I/O）")]),t._v(" "),s("h3",{attrs:{id:"实现"}},[t._v("实现")]),t._v(" "),s("p",[t._v("新建文件夹ing")])])}),[],!1,null,null,null);s.default=i.exports}}]);