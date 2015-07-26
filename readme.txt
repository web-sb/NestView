/****************************结构说明****************************/

index   - 系统首页
404  	- 404错误页面
500  	- 500错误页面


dist	- 公用静态文件
    /css    - 样式表路径
    /img    - 图片路径
    /js     - javascrip路径
    
    
routes  - 路由路径
    /admin  - 管理员路由
    /common - 公用路由
    
    
views   - 页面路径
    /common - 公用路径
        login   - 登陆页面
	register- 注册页面
    /admin  - 管理员路径
        index   - 管路员总览页
        admin   - 管理员服务主页
        /user   - 用户服务路径
        /monitor- 监控服务路径
        /ems    - 能源管理服务路径
    
bin     - npm发布路径*
modules - 使用公用模块路径*