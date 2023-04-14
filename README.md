#项目结构  
硬件：esp32-cam（采用Arduino进行烧录）获取视频流  
前端：使用vuejs ElementUI  
后端：使用python编程语言  
project:项目目录  
project.project：{settings.py(项目配置） urls.py(url配置表，将url映射到具体应用），wsgi asgi（web接口协议）}  
project.newsysytem：{views.py（视图 存放类和函数 实现手势识别）}  
project.static：存放vue打包后生成的静态页面文件 包括css fonts js文件  
project.template:存放vue打包后生成的index.html文件  
##安装  
conda create —n env python=3.8//创建虚拟环境  
conda activate env//启动虚拟环境  
pip install -r requirement.txt   
#运行项目  
cd project //进入project目录  
python manage.py runserver  


