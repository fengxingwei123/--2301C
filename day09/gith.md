#### gith

```
为什么使用gith
1.现实编码中涉及好多修改,你记不住。-git可以跟踪历史版本
2.可以更好进行团队协作开发-提交历史,版本修改,代码冲突问题

下载
https://git-scm.com/  官网
http://npm.taobao.org/mirrors/git-for-windows/ 淘宝镜像
https://github.com/注册账号

配置用户名 邮箱
git config --global user.name "kuangshen"
git config --global user.email ""
git config -l

配置文件
1. git clone git@github.com:threeSunlight/2301C.git(复制来的地址)
2. 进入到克隆后的文件夹路径下
3. 把代码放进去
4. git add .
5. git status // 查看暂存区是否有代码储存
6. git commit -m '描述这块代码的作用'
7. git push 

方法二
1.注意推之前先拉取 
git init 初始化下本地仓库  
git remote add origin 仓库地址   关联远程库  
git pull origin master 拉取分支名  git add 文件名   提交到暂存区 
【git add -A 或git add . 提交本地全部文件】 
git status      查看提交状态  
git commit -m '提交说明'      
提交说明  git push origin master 提交到远程库//备注用 
git push --set-upstream origin master（省略形式为：git push -u origin master） 
或者先关联远程库  git remote add origin 仓库地址  
然后每次提交用  git push origin master 提交到版本库

配置公钥
方法2(ssh公钥):1.生成ssh公钥: ssh-keygen -t rsa -C  '邮箱地址',
生成地址一般默认是在 C:\Users\dell.ssh\id_rsa.pub 2.查看公钥:cat ~/.ssh/id_rsa.pub ,
查看后复制到自己的Git帐号的SSH设置中(!!!注意查看命令,要在git bash里才有效)
查看所有配置项，看看有没有user.name,user.email这两个配置git config --list5.最后克隆个仓库试下(!!!克隆的时候,会让你输入git仓库的登录账号与密码,输入这1次就可以):1.克隆所有: git clone 仓库地址或者克隆指定分支:   git clone -b dev 仓库地址 


新建分支
新建分支 → 分支上开发(写代码) → 提交 → 合并到主分支2.1创建分支合并步骤:
1.git branch kuige 创建分支名 git branch  
查看当前分支 git checkout  kuige分支名  
切换到创建的分支上 git merge master  
把kuige合并到master上(别在原来分支) 
git push origin kuige 推到远程子分支git push origin master推到远程主分支 

.2 分支其它命令 
1.查看所有分支git branch -a 
2.查看本地分支git branch 
3.创建并切换分支 （加-b表示创建并切换）git checkout -b 分支名 
4.切换回分支git checkout 分支名 
5.从主分支里创建新分支git checkout master -b 新分支名 
6.合并某分支到当前分支git merge 分支名
7.删除分支-不要在当前分支下 ,否则删除不了git branch -d 分支名git branch -D 分支名 (强行删除分支)
8.删除远程分支git push origin --delete kuige
```

