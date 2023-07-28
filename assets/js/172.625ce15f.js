(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{1377:function(s,a,e){"use strict";e.r(a);var t=e(3),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"安装"}},[s._v("安装")]),s._v(" "),a("p",[s._v("官网下载："),a("a",{attrs:{href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://git-scm.com/downloads"),a("OutboundLink")],1),s._v(" 下载完成后使用默认进行安装。")]),s._v(" "),a("p",[a("code",[s._v("linux")]),s._v("安装")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("yay -S git\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("安装完成后，在开始菜单里找到 "),a("code",[s._v("Git")]),s._v(" -> "),a("code",[s._v("Git Bash")]),s._v("，蹦出一个类似命令行窗口的东西，就说明Git安装成功！\n还需要最后一步设置，在命令行输入：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('git config --global user.name "northboat"\ngit config --global user.email "northboat@163.com"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("因为Git是分布式版本控制系统，所以，每个机器都必须自报家门：你的名字和Email地址。")]),s._v(" "),a("p",[s._v("添加 ssh 密匙")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('ssh-keygen -t rsa -C "northboat@163.com"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("将路径下的 id_rsa.pub 内容添加到 github 的 setting-ssh，本机获取读写权限")]),s._v(" "),a("h2",{attrs:{id:"创建版本库"}},[s._v("创建版本库")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 创建仓库\nmkdir <仓库name> \n\n# 进入仓库\ncd <仓库name>\n\n# 此命令用于显示当前目录\npwd\n\n# 把当前目录初始化成Git仓库\ngit init\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("blockquote",[a("p",[s._v("也不一定必须在空目录下创建Git仓库，选择一个已经有东西的目录直接"),a("code",[s._v("git init")]),s._v("也是可以的。")])]),s._v(" "),a("h2",{attrs:{id:"添加文件到仓库"}},[s._v("添加文件到仓库")]),s._v(" "),a("p",[s._v("在仓库目录下放入文件，如新建一个"),a("code",[s._v("test.txt")]),s._v("文件，然后使用"),a("code",[s._v("git add test.txt")]),s._v("命令告诉Git，把文件添加到缓存区，然后使用"),a("code",[s._v('git commit -m "提交描述"')]),s._v("告诉Git，把文件提交到仓库。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('# 添加指定文件或文件夹到缓存区，文件需添加后缀\ngit add <文件或文件夹name>                   # 单个文件\ngit add <文件或文件夹name> <文件或文件夹name>  # 多个文件\n\n# 或 全部文件同时添加到缓存区\ngit add .\n\n# 把文件从缓存区提交至仓库\ngit commit -m "提交描述"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h4",{attrs:{id:"提交描述规范"}},[s._v("提交描述规范")]),s._v(" "),a("p",[s._v("在提交代码时输入清晰的说明有利于版本管理，建议搭配如下关键字编写提交描述")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 新建(add)\n# 删除(rm)\n# 更新(update)\n# 改动(change)\n# 实现\n# 发布\n# 修复\n...\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"版本管理"}},[s._v("版本管理")]),s._v(" "),a("h4",{attrs:{id:"提交修改"}},[s._v("提交修改")]),s._v(" "),a("p",[s._v("如修改"),a("code",[s._v("test.txt")]),s._v("的内容后，运行"),a("code",[s._v("git status")]),s._v("命令看看被修改的文件，然后再使用"),a("code",[s._v("git add test.txt")]),s._v("、\n"),a("code",[s._v('git commit -m "修改描述"')]),s._v("把修改后的文件提交到仓库，提交后可再次使用"),a("code",[s._v("git status")]),s._v("查看当前状态。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 显示 新增/删除/被改动等 的文件\ngit status\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h4",{attrs:{id:"查看版本记录"}},[s._v("查看版本记录")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 查看版本记录\ngit log   # 显示版本号、提交时间等信息\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("blockquote",[a("p",[s._v("也可使用可视化工具查看Git版本历史：\n在仓库目录右键 > "),a("code",[s._v("Git BUI Here")])])]),s._v(" "),a("h4",{attrs:{id:"回退版本"}},[s._v("回退版本")]),s._v(" "),a("p",[s._v("首先，Git必须知道当前版本是哪个版本，在Git中，用"),a("code",[s._v("HEAD")]),s._v("表示当前版本，也就是最新的提交1094adb...（注意我的提交ID和你的肯定不一样），上一个版本就是"),a("code",[s._v("HEAD^")]),s._v("，上上一个版本就是"),a("code",[s._v("HEAD^^")]),s._v("，当然往上100个版本写100个^比较容易数不过来，所以写成"),a("code",[s._v("HEAD~100")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 回退到上一个版本\n$ git reset --hard HEAD^\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("此时查看"),a("code",[s._v("git log")]),s._v("记录发现，原来最新的版本已经没有了，想回到原来最新的版本怎么办？这就需要知道最新的版本的版本号")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 跳转到指定版本\ngit reset --hard <版本号前几位>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("但是不知道版本号怎么办？Git提供了一个命令"),a("code",[s._v("git reflog")]),s._v("用来记录你的每一次命令")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git reflog\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"撤销修改"}},[s._v("撤销修改")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.liaoxuefeng.com/wiki/896043488029600/897889638509536",target:"_blank",rel:"noopener noreferrer"}},[s._v("廖雪峰 - 撤销修改"),a("OutboundLink")],1)]),s._v(" "),a("h4",{attrs:{id:"删除文件"}},[s._v("删除文件")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.liaoxuefeng.com/wiki/896043488029600/900002180232448",target:"_blank",rel:"noopener noreferrer"}},[s._v("廖雪峰 - 删除文件"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"远程仓库"}},[s._v("远程仓库")]),s._v(" "),a("h4",{attrs:{id:"ssh验证"}},[s._v("SSH验证")]),s._v(" "),a("p",[s._v("使本机能关联远程仓库，首次需要SSH验证")]),s._v(" "),a("ul",[a("li",[s._v("第1步：创建"),a("code",[s._v("SSH Key")]),s._v("。在用户主（C:\\Users\\dell）目录下，看看有没有.ssh目录，\n如果有，再看看这个目录下有没有"),a("code",[s._v("id_rsa")]),s._v("和"),a("code",[s._v("id_rsa.pub")]),s._v("这两个文件，如果已经有了，可直接跳到下一步。\n如果没有，打开Shell（Windows下打开Git Bash），创建"),a("code",[s._v("SSH Key")]),s._v("：")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('# 创建SSH Key\nssh-keygen -t rsa -C "邮件地址"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("第2步：登陆"),a("code",[s._v("GitHub")]),s._v("，"),a("code",[s._v("右上角头像 > settings > SSH and GPG keys >Add SSH Key")]),s._v("，在key的文本框里粘贴"),a("code",[s._v("id_rsa.pub")]),s._v("文件的内容")])]),s._v(" "),a("p",[s._v("查看文件内容")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cat id_rsa.pub\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"关联远程仓库"}},[s._v("关联远程仓库")]),s._v(" "),a("p",[s._v("SSH验证完成后，在github创建仓库，创建仓库时记得取消 "),a("code",[s._v("Initialize this repository with a README")]),s._v("的勾选，然后在本地命令：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 关联远程仓库，仓库名一般使用origin\ngit remote add <仓库名> <远程仓库地址>\n\n# 示例\ngit remote add origin git@github.com:xugaoyi/test.git\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("下一步，就可以把本地库的所有内容推送到远程库上")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 把文件推送到远程仓库\ngit push -u <仓库名> <分支名>\n\n# 示例\ngit push -u origin master\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("由于远程库是空的，我们第一次推送"),a("code",[s._v("master")]),s._v("分支时，加上了"),a("code",[s._v("-u")]),s._v("参数，Git不但会把本地的"),a("code",[s._v("master")]),s._v("分支内容推送的远程新的"),a("code",[s._v("master")]),s._v("分支，还会把本地的"),a("code",[s._v("master")]),s._v("分支和远程的"),a("code",[s._v("master")]),s._v("分支关联起来，在以后的推送或者拉取时就可以简化命令。")]),s._v(" "),a("blockquote",[a("p",[s._v("前提是目录已经"),a("code",[s._v("git init")]),s._v("初始化成仓库，并且"),a("code",[s._v("git status")]),s._v("状态是没有改动的，如果有改动则先"),a("code",[s._v("git add .")]),s._v("添加至缓存区，"),a("code",[s._v("git commit -m '提交描述'")]),s._v("提交至仓库，然后执行上面命令。")]),s._v(" "),a("p",[s._v("如创建仓库时勾选了 "),a("code",[s._v("Initialize this repository with a README")]),s._v(" 则需先拉取"),a("code",[s._v("README.md")]),s._v("文件到本地仓库"),a("code",[s._v("git pull")])]),s._v(" "),a("p",[s._v("可关联多个远程仓库，注意给不同的远程仓库取不一样的名称，提交是分别按名称提交到不一样的远程仓库。")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 简化的推送命令\ngit push\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h4",{attrs:{id:"查看远程仓库"}},[s._v("查看远程仓库")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 查看远程仓库\ngit remote -v\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h4",{attrs:{id:"删除远程仓库"}},[s._v("删除远程仓库")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 删除远程仓库\ngit remote rm <仓库名>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h4",{attrs:{id:"从远程库克隆项目"}},[s._v("从远程库克隆项目")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 从远程库克隆项目\ngit clone <仓库地址>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h5",{attrs:{id:"克隆指定分支"}},[s._v("克隆指定分支")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 克隆指定分支\ngit clone -b <分支名> <仓库地址>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"分支管理"}},[s._v("分支管理")]),s._v(" "),a("h4",{attrs:{id:"创建分支"}},[s._v("创建分支")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 创建分支\ngit checkout -b <分支名>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h4",{attrs:{id:"查看分支"}},[s._v("查看分支")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 查看分支\ngit branch\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("查看分支时，在分支前带 * 号的表示当前的分支")]),s._v(" "),a("h4",{attrs:{id:"切换分支"}},[s._v("切换分支")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 切换分支\ngit checkout <分支名>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h4",{attrs:{id:"合并分支"}},[s._v("合并分支")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 合并本地的分支\ngit merge <分支名>\n\n# 合并远程的分支\ngit merge <远程仓库名>/<分支名>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("strong",[s._v("注意")]),s._v("，是将指定分支合并到当前分支，并非当前分支合并到指定分支。")]),s._v(" "),a("p",[s._v("一般情况下是把当前分支切换到"),a("strong",[s._v("主分支")]),s._v("，然后把"),a("strong",[s._v("子分支")]),s._v("合并到"),a("strong",[s._v("主分支")]),s._v("。")]),s._v(" "),a("h4",{attrs:{id:"删除分支"}},[s._v("删除分支")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 删除分支\ngit branch -d <分支名>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h4",{attrs:{id:"修改分支名"}},[s._v("修改分支名")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 修改分支名\ngit branch -m <原分支名> <新分支名>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"帮助命令"}},[s._v("帮助命令")]),s._v(" "),a("p",[s._v("如对命令不清楚时，可使用"),a("code",[s._v("git help")]),s._v("命令显示出git命令介绍。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 帮助命令\ngit help\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("中文")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ git help\n使用：git [--version] [--help] [-C <path>] [-c <name>=<value>]\n           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]\n           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]\n           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]\n           <command> [<args>]\n\n这些是在各种情况下使用的通用Git命令：\n\nstart a working area (参见命令: git help tutorial)\n   clone      将存储库克隆到新目录中\n   init       创建一个空的Git存储库或重新初始化一个现有的存储库\n\nwork on the current change (参见命令: git help everyday)\n   add        将文件内容添加到索引中\n   mv         移动或重命名文件、目录或符号链接\n   reset      将当前磁头重置为指定状态\n   rm         从工作树和索引中删除文件\n\nexamine the history and state (参见命令: git help revisions)\n   bisect     使用二分查找查找引入错误的提交\n   grep       打印与模式匹配的行\n   log        显示提交日志\n   show       显示各种类型的对象\n   status     显示工作树状态\n\ngrow, mark and tweak your common history\n   branch     列出、创建或删除分支\n   checkout   切换分支或还原工作树文件\n   commit     记录对存储库的更改\n   diff       显示提交、提交和工作树等之间的更改\n   merge      将两个或多个开发历史连接在一起\n   rebase     在另一个基本提示之上重新应用提交\n   tag        创建、列表、删除或验证用GPG签名的标记对象\n\ncollaborate (参见命令: git help workflows)\n   fetch      从另一个存储库下载对象和引用\n   pull       从另一个存储库或本地分支获取并与之集成\n   push       更新远程引用和相关对象\n\n'git help -a' 和 'git help -g' 列出可用的子命令和一些概念指导。\n命令'git help <command>' 或 'git help <concept>' 查看特定子命令或概念.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br")])]),a("h2",{attrs:{id:"我的使用"}},[s._v("我的使用")]),s._v(" "),a("h4",{attrs:{id:"一些问题"}},[s._v("一些问题")]),s._v(" "),a("p",[s._v("10056：产生原因，一般是这是因为服务器的SSL证书没有经过第三方机构的签署，所以才报错")]),s._v(" "),a("p",[s._v("使用以下命令接触ssl验证后再次git即可解决")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('git config --global http.sslVerify "false"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("port 443 timed out：就是卡了")]),s._v(" "),a("p",[s._v("broken pipe：文件过大导致，git 默认文件大小小于等于100MB")]),s._v(" "),a("p",[s._v("可修改缓存大小为500MB强行上传")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git config http.postBuffer 52428800 \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"日常使用"}},[s._v("日常使用")]),s._v(" "),a("p",[s._v("拉取主分支更新")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git checkout main\ngit pull\ngit checkout NorthBoat\ngit merge main # 把 main 合并到当前 NorthBoat 分支，main 可省略，默认为主分支\ngit push # 更新当前分支\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("更新主分支")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git checkout main\ngit merge NorthBoat # 主分支合并 NorthBoat 分支\ngit push # 更新主分支\ngit checkout NorthBoat # 返回原分支\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("回退到上一个版本并保存当前版本")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git stash\n\n# 查看保存的版本\ngit stash list\n# 恢复到上个版本并删除上个版本保存\ngit stash pop\n# 恢复到某个保存的某个版本\ngit stash apply stash@{版本id}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("撤销本地提交")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 撤销上次commit，但不撤销add\ngit reset --soft head~1\ngit reset --soft head~ # 二者等价\n\n# 撤销上次commit和add\ngit reset head~\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("本地版本回退")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 查看 commit_id\ngit log\n\n# 回到到前两个版本\ngit reset --hard head~2\n# 回到到指定版本\ngit reset --hard commit_id\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h4",{attrs:{id:"廖雪峰的文档"}},[s._v("廖雪峰的文档")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.liaoxuefeng.com/wiki/896043488029600",target:"_blank",rel:"noopener noreferrer"}},[s._v("廖雪峰的文档"),a("OutboundLink")],1)]),s._v(" "),a("h4",{attrs:{id:"错误的提交"}},[s._v("错误的提交")]),s._v(" "),a("p",[s._v("本地版本回退")]),s._v(" "),a("p",[s._v("查看版本号")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git reflog\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("找到要回退的版本号")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git reset --hard 版本号\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果已经将错误的版本提交到远程仓库，使用旧版本强行覆盖")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git push -f\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("注意这里本地已经是旧版本，如果要推送修改后的版本，需要重新提交，即重新"),a("code",[s._v("git commit")])]),s._v(" "),a("p",[s._v("撤销"),a("code",[s._v("git add .")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git reset .\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"子模块的链入和移除"}},[s._v("子模块的链入和移除")]),s._v(" "),a("p",[s._v("编写"),a("code",[s._v(".gitmodules")]),s._v("文件，填入子仓库的路径以及仓库"),a("code",[s._v("url")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('[submodule "themes/cactus"]\n\tpath = themes/cactus\n\turl = https://github.com/probberechts/hexo-theme-cactus\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("删除子模块")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git rm themes/cactus\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);