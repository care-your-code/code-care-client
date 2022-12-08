FROM node:16.13.1-alpine as BUILD

# 컨테이너 생성 전 수행될 명령어를 RUN을 통해 작성할 수 있다.
RUN mkdir -p /app

#root 작업 디렉토리 설정 이후 ./에 대한 위치가 된다.
WORKDIR /app

#Dockerfile 이 존재 하는 디렉토리 -> Docker workdir 디렉토리에 복사한다.
COPY ./ ./

#복사한 파일중 package.json을 이용하여 의존성 설치 한다.
RUN npm install

EXPOSE 3000

ENTRYPOINT ["npm", "start"]
