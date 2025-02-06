<template>
<div id="app1">
    <div id="reg">
        <div>
            <img class="login_img" src="https://keyportaldev.krclouds.com/upload/2/0/20200917/1600335076504744400.png">
        </div>
        <div>
            <input class="login_text loginlogo" type="text" placeholder="账户名/手机号/Email" maxlength="18">
        </div>
        <div>
            <input class="login_text passwordlogo" type="password" placeHolder="请输入您的密码" maxlength="18">
        </div>
        <div class="btn" >
            <Button type="primary" to="/home" style="width:300px; height:35px;font-size:20px">进入</Button>
        </div>
        <div class="create">
            <Button type="success" to="/login" style="width:300px;height:35px;font-size:20px">注册账号</Button>
        </div>
        <div class="font">
            企业微信登录：
            <img class="font_img">
            </div>
    </div>
</div>
</template>
<script>
 export default{
     
 }
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
}
#app1{
  background-image: radial-gradient(circle, rgb(236, 72, 47) 1%, rgb(125, 31, 4));
    width: 100%;
    height: 100%;
    position: absolute;
   
}
#app1 #reg{
    text-align: center;
}
#app1 .login_img{
    margin-top: 100px;
    margin-bottom: 50px;
}
#app1 .login_text{
    width: 350px;
    height: 40px;
    margin-bottom: 40px;
    background-color: white;color: black;
    font-size: 15px;text-indent: 10px;
    border: 2px solid white;
    outline: white;
    border-radius: 10px 2px 10px 2px;
}
#app1 #reg .font{
    margin-top:35px;
    font-size:15px;
    color: white;
    padding-right: 200px;
}

#app1 #reg .font_img {
    height:25px;
    width: 25px;
    border: 1px solid transparent;
    background-repeat: no-repeat;
    background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAADXZJREFUeNrsXe1x2zgTpjj5f7oKwlQQpQIzFVipIEwFliuIXYHiCqRUILkC0RVIqYC6CqSrQEe8Wd5L+/RBEbvgEnieGY49zoQSsPtgP7BYxBEAACcRYwoAAAQBABAEAEAQAABBAAAEAQAQBABAEAAAQQAABAEAAAQBABAEAEAQAABBAAAEAQAQBAB6hXeYgtc4HA6j8sfwzZ/N327LJ2X6mLz2+0vtb9vBYLCFFPRgEDgZElJ+89zQz2HHX2tfPpvyeTakKQmzgZqCIC7IMCQLUBEh7clX35N1MYRZloTZQ21BEE536SuRYeTJsIxF+QnrAoLYuE135TMun8Rz+Zl4ZWkIA7KAIJfcpzERYxSoLCvLskSgD4LUXShDigyifIXKqiwxFQESpCRGFri1uMYFM1ZlDqviOUHIjZpQ0J1AdFdjXj5PiFU8I0iNGMZiDCEya+Tl81gSJcdU9JggIAaIogGxUnIYYhTl8x3kEENaPqtyrs2TYjp6QBAjqPIxxJiCGM6JsqA9JEAbQYxgzEpmBIUAvDOYfaSilMMDubeAhhjECKRHcUZVSNgUZkx9TEVvy+ce+ygdEoQ2+WZKFWhLRPgVMZWhk/tSf25qv2uFIci3kAskBx2RY0JxhiZCGCKYsxm5y001Io6JAz5GOuvH9kSSJQgirwxDshrjUAlxBWFuaJ60uJ5zcrv2IIicS7XocIVcEiF6VcxH82aIcqvAHd2QNcFuPLOQx+WzO7iHSV9mvmRlKNs3KZ/1oTvsqBYOYBJq1oEAp77n9BWQZQrtthfi1KHAClKYYYDzPCqfWQdWeoE9k/ZCmzkkBkw+JUHIYhcOSbIGSXSSY0ebjMBp13YFkoRJjikE0lgeqSOLskYt12VhTBxkpXCKsL1FKRy4u1i4OshW7Wj3HbCPUR7gbnVjxmG6+5X1WoMk7iZbKr2IIFxWdpLWZIUJ/m2y10IuVQoVdrbAScUms9AndwGXypuFTiolnME8M6448F07lelMyBsYhTaRI5hjb2UrkaoPJ/1L5rhAMO61jCVS9tNQJm8GHxUkaYmx75M2BjlAErhablwrnCcIMyaZ+jpRUwTkyG4xYeTbBHFmrbDD2k8dWEEH5CcHNTpwsf0K2BkDtfA2jPwjCacnUfgyKQUyVoBQ0J71fTIyBOWAoMtd9H0iOKwHTpn5R5CE8YhDqnms8TnrEfF0QQy6+bGPoM6Uj0yv+x6y9cBmIFytJkj6NvCMKWsF18p/Vyu83XWmU4LIWoVBEo5zQbs+DZgj172G6gRDkCFTwK5y4/BYkH7H8N57qE4wAbtJwDwxvOo2lNUAtVawIt64WW8tCMeNRo9QGViRFhhqdLNiZjNnrjPLoTJBYu6jmxXXzWRkf3fgE/QkWCuyjX5fc2eDVLMFsSXHFvdqB4+flv8/0VbxHTOaN1gPWBGzQNqWFaVaCWL7xeZQEYDBzfqojiBUUWmTvVqiIBEgvPhoQdKOJwWABanHIUNtBLE1azn0AqA4ZM+gDyNtBLGxIPtyUjZQDcBHNyumWnwbkwZyANwexXtNFiRB/AEwu1m2BEk0EcTWnG2hEgCzFVEVg/wBggDK4hBVWawRCAJoi0O0dDuJGfxNEASQiEO8iUEA4BRsMpyJFoIAgBS2oRMkhw4AZ/DLBxcLAAAQBOgZbkAQwHf80fcBvLP8/2gtCpxDRj9Nha/JaL3Qz/2RgNycaNXXPM62HR50ADijWw/XbPhRV89CVX81EARQRqrq7hEVBHkHkQDSViR6fQfIlh7jZpk08KteaqYyo/w/pvngey0DsG0ZiYs5gWN6lV1xx8yO3LGhxoGsfL5CC3CuT6nF5Us7bfoUR/Z9jGBBgH+tRvnDxA5Jy1cYC7LS5JXEkX05AFK9QESNp7luM15oIsjW8h03UA+gBOc1aomWG8oMQWybLsDFgvXIIv7q2zsNYxvQAG33Mz7g4FTQBCkimfL0zvWqqsXKLd+TQk2CJccokju70XnpSUUQ29Y9iEPChaQS32ghSN53pgOdQbIbe6qCILTVb7MfMtR6jS8gDsk0/7DrPZH6eRBbK3ILXQkSac/f35ggz5bvyqjPLxAWtsLvv9VCEI7rszLoCwjCbUG6LGL8lyB0r4Pt5Sd3KisyAUm46O4/7pwgBNtbSg05JtCZoODi8tavakZrUapcL1mGFQkIpbynB3l0Et8e62ryCCsCXIlHB67Wdy2rwZDhlOEOGa3grMiQ4fCdOivyHwtCwbqtX2msyBRqEw6M3pTP5/LX+8g+GxqEFcFx3LCtyQOTDunUKRqgLQoE7METxWwgLxgJsvbNisDV8k/xRxRvVM/DpZqpN2TZeaFTTFYErpZ/VmF9RMaLK9+TUnp43VudoskoGAiCvRG/yWHl+lA3xcmVuqYjU2rK2JmsyAoq5i052NrQkmVpalXWKhZexvw24pH+xhyXlDZj/sxJw1hlpWGCEsaUXQaV6xU5sgaynwrqXZPFeaZhorgC9h36+fbGpVpoUM6GuqeCJCuQJAhyNHVv1g6/UxNLNut64jhdLZBEpzvVNJPkfBOYYqGd6vtqaBLZdkVR1Ng7YnS6uF0iiZYJnTGSBJakO29g2tIjmCj47utLGS2Ko2Zn9G5Fc5BKBHDrAy9whkQ+6B6TQths/i4UjWd97AKelsWSC1aXsYk/2GbysePOuspmtIIWjNZ+qHzcmYVerrlJMj7wAy6XnUxSwYNLY8XjbpqWdk6SiZAwMqh7JwrSy1Ih5rFPub/cDCRR449LYaR4/JnAeNkD9xVI4sXqqXOX+vz411IWc8C5ikW/L3DkXmnM+eZPuKDndMxB8y4JtRck0T5aIfT6TzHXm6jZw+eI/8C+IR46x5+GdCODXPniJKkbX2POtwmSBJ3jT1vtVPhjfiqfBtH7SWLuN5Yk2QiRBPgvxAPnUp7zgOdgFAtNqiHJF+ivOKStx7IHcyC6SMRSL6Zbq75Bh3uNF81fzkXqOZZ8OZlnDpLAXesGG+Xfr98EYSTJC3T1KLbCssuVj1/6Ftx97GIURBIbfzYHF5wTpA9zLh2D5bHDwfxqy2IK+tv4qMfaXu7ob+rvVHxTor5+eyBIeIXXHn8YckjL79nlgFYuyhxanAWoyDLUSIhLJ+YEy0xGygkyEy6v+d/u/MDhgIqWjP9SrpTLhp/xUP64i9rf3b0h1+KvWoC6oQ1QqSzMiHzpUcOg88/696ESdO5DTNvyMz4oJofRo0L4Yz4bC/3O4bjakGPfhBxkbmcMJveoktYW7n2dOOXzd/S7FCNvQIRq1/s9fc/U4jvmNTdrWb5/y+xuaN89ly6v+eY0QUGHeNjdKzo1J13Jeu1hm6rjeSH0GZMj88B5cE31qUELXWraqeXVwuXKgrRdLZ/PTNSEVhJNwnTht5sbX3+8CdaNFTGZwozh/ffGhaNjBpVVmisqWJTo4ljdqvZDyp2WCNB3p9yVg/xdeNqRnAjwbc9FZDXLfCyZkXRsPbhPr75q9tDlwNocol8cC8IPwNnjr4d2VzIX9fPmZxRRbT+sFs1BMhX2kFY2K1/7cF1L/FDwcCE2m1ywtAWlSrMrF6JOSMIgfzXpfK6gKr3Q+As4Q5ITK3DaREEaBP1OSdLSKuolBZPfuDjI3JLqnbvFHRscmt1P6YQkLRoyrDhJ4aLUpO0XHSvLUGmFyRBW7hKLwlIm57GBXFcHwbsCaTxNslZ7yuyZs/Nmg2/OlY1yQZAb6LCzFDObJSkVzCjcsiFJ2DNBZBVXFxbJisiGGPe9bOyBlKyTzclMSHbXpI6rlGni6HPZXcujC4WLFG/HrlK1qiRR/7Ghx9SK5S7KIVq2czKWx2zyLq91dRp+nnGhnJxWdUGQru5sMIK5r5oO0MRXtVYfI7t6KJdjyEnZOmu/Y9nz7CqyUHnROYtoikc/uRq7rwQx/vNjQ4FUvnu9qrYri5eThfhFiqDmyCtTY8CLZKH9r+kZC/rZZTnIQHhSjeIVDuVoVljrSsyatTEW5n3UvBS9qVXY0Hetyuq3mshwYTFZMS0gxrI/v63WPqMzRqZfXNdKSRMkjeTbYlbEeJTu4VQrW08axjTbWgy09aF9Km1OfpeU3Rs3a0lEmke+Qbg0uSqXyCLAtVyLUGQZ91RGOblSH7xcWfRD4kCVscgzSt8OQ1lpuC3ITHLnFmgeWwp7BmpuGeuDBdlTQGesxbce9GryHhRLSbYlrXbokxBWm5XFKvJwwKWeWuWaOagSWIUwkcmVVbkgBtysV8cesNrUzjeAGL2Sq4tDbLNQJvPc9cSzIPxN/2Q6cVGM2Wm81QVRov/XQJlgL8f9g70liMk0iStwqR+DYAgCeEeSth0zm8I0D/yzq/HFEDFgCelbqDqtUQNBAFv8BEEA4HR8UFUmS+EFBAH6jieh926bdvYHQQDNmEcy90g+dT0wEATgcLP2Aspc1eCBIIAX+MFsRR476bQOAFJgLGBcYzYBX0ky8+UsCABoI0kBcgChkOThSmJMUMkNhEaS5HD6SusV/dsYMwUAPQXSvAAAggAACAIAIAgAgCAAAIIAAAgCACAIAIAgAACCAAAAggAACAIAIAgAgCAAAIIAAAgCAP3CPwIMAFEENtuaf1bUAAAAAElFTkSuQmCC");
    background-size: 25px 25px;
}
#app1 #reg .create{
    padding-top: 15px;
}

#app1 .login_img{
    width: 390px;
    height: 130px;
    margin-top: 200px;
}
#app1 .loginlogo{
    background-image: url(../assets/userimg.png);
    background-size: 20px 20px;
    background-repeat:no-repeat;
    background-position: 310px 10px;
}
#app1 .passwordlogo{
    background-image: url(../assets/passwordimg.png);
    background-size: 20px 20px;
    background-repeat:no-repeat;
    background-position: 310px 10px;
}

</style>