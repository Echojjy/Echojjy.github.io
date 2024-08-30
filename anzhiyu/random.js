var posts=["2024/08/29/hello-world/","2024/05/10/更新日志-1/","2024/05/03/更新日志/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };