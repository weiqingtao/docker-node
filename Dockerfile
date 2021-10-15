#基于node12
FROM node:12-alpine
#镜像标签
LABEL author = "18769836465@163.com"
LABEL version = "1.0"
LABEL description = "docker node test"
#工作目录
WORKDIR /app
#把当前目录的文件拷贝到data下面
COPY ./ /app

RUN npm install pm2 -g \
    && yarn  install
#暴露端口
EXPOSE 3000
#启动项目
CMD [ "pm2-runtime", "start","/app/bin/www"]

