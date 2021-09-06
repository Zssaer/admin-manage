<template>
    <div>
        <el-tabs type="border-card" v-model='type'>
        <el-tab-pane label="后台操作说明" name='1'></el-tab-pane>
        <el-tab-pane label="后台信息" name='2'></el-tab-pane>     
            <div class="ms-doc" v-if="type==2">
                <article>
                    <h1>Admin-Manage后台</h1>
                    <el-row>
                        <el-col :span="8" >
                            <el-card class="box-card" shadow="hover" >
                                <template #header>
                                    <div class="card-header">
                                    <h2>个人信息</h2>
                                    </div>
                                </template>
                                <div class="text item">
                                    <p>{{'当前账户ID :' + personalInfo.id }}</p>
                                    <p>{{'当前账户名称 :' + personalInfo.name }}</p>
                                    <p>{{'当前账户角色ID :' + personalInfo.roleId }}</p>
                                    <p>{{'当前账户角色类型 :' + personalInfo.roleName }}</p>
                                </div>
                            </el-card>
                        </el-col>
                        <el-col :span="8" v-if="pageConfig!=''">
                            <el-card class="box-card" shadow="hover">
                                <template #header>
                                    <div class="card-header">
                                    <h2>网站配置信息</h2>
                                    </div>
                                </template>
                                <el-skeleton :rows="5" :loading="pageConfigLoading" animated>
                                    <div class="text item">
                                        <p v-for="(val, key, i) in pageConfig" :key="i">{{key}}:{{val}}</p>
                                    </div>
                                </el-skeleton>
                            </el-card>
                        </el-col>
                        <el-col :span="8" v-if="sysConfig!=''">
                            <el-card class="box-card" shadow="hover">
                                <template #header>
                                    <div class="card-header">
                                    <h2>系统参数</h2>
                                    </div>
                                </template>
                                <el-skeleton :rows="3" :loading="sysConfigLoading" animated>
                                    <div class="text item">
                                        <p v-for="(val, key, i) in sysConfig" :key="i">{{key}}:{{filter(val)}}</p>
                                    </div>
                                </el-skeleton>    
                            </el-card>
                        </el-col>
                        <el-col :span="8" v-if="Explore!=''">
                            <el-card class="box-card" shadow="hover">
                                <template #header>
                                    <div class="card-header">
                                    <h2>浏览器参数</h2>
                                    </div>
                                </template>
                                <el-skeleton :rows="3" :loading="ExploreLoading" animated>
                                    <div class="text item">
                                        <p>浏览器类型-{{Explore}}</p>
                                        <p>UserAgent:{{UserAgent}}</p>
                                    </div>
                                </el-skeleton>    
                            </el-card>
                        </el-col>
                    </el-row>    
                </article>
            </div> 
            <div class="ms-doc" v-if="type==1">
                    <article>
                        <h1>Admin-Manage后台操作说明</h1>
                        <h2>基本内容说明</h2><h3>个人管理</h3><p>修改密码：修改当前后台用户的登录密码。</p>
                            <h3>内容管理</h3>
                                <p>栏目管理：管理网站可编辑元素内容(首页横幅图,成员轮播图,实验室介绍等)。</p>
                                <p>研究项目管理：管理发布科研项目内容。</p>
                                <p>研究方向管理：管理研究方向内容。</p>
                                <p>开源代码管理：管理开源代码内容。</p>
                                <p>论文管理：管理发布科研论文内容，支持上传PDF文件。</p>
                                <p>获奖信息管理：管理发布获奖信息。</p>
                                <p>文章管理:管理发布文章类内容(新闻信息、通知通告、人才招聘)。</p>
                            <h3>数据测量组</h3>
                                <p>数据参数管理：编辑网站上各类参数数据（学生类型、老师类型、页尾参数等），也支持直接修改网站服务器配置参数。</p>
                            <h3>系统管理</h3>
                                <p>用户管理：管理后台用户创建以及用户角色、密码重置功能。</p>
                                <p>角色管理：管理后台用户角色类型以及分配后台使用权限。</p>
                                <p>日志管理：查询后台操作日志。(建议定期清理操作日志)</p>
                                <p>网站管理：设置网站页尾联系信息及服务器相关参数。</p>
                                <h3>成员管理</h3>
                                    <p>教师管理：管理成员中教师内容。</p>
                                    <p>学生管理：管理成员中学生内容。</p>
                                <div>
                                    <div><hr/>
                                        <h2>注意事项</h2>
                                        <!-- <h2><span><b>关于批量操作</b></span></h2>
                                            <p>部分内容操作支持批量操作，可以允许将所有当前类型的内容进行批量操作。</p>
                                            <p>批量删除：删除复选框选择的所有内容。</p>
                                            <p>批量导出：将所有内容导出为Excel表格文件。</p>
                                            <p>下载导入模板：下载一个标准的Excel导入模板文件，用于后续进行导入。</p>
                                            <p>批量导入：上传一个导入模板的Excel文件，将其中的数据进行按规范进行导入。</p>
                                            <p><b><span></span>注意<span>：批量导入只有是导入模板的Excel文件才能支持导入。</span></b></p>
                                            <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;批量导入的数据必须按新增中要求填入，否则会出现导入错误或导入混淆等情况</p><hr /> -->
                                        <h3>关于发布语言</h3>
                                    </div></div><p>大部分内容操作时需要指定对应的发布语言，对应的发布语言只会显示到对应的语言页面中</p><h3>关于显示排名</h3><p>在部分内容中包含显示排名（学生、教师等），显示排名中数字越大，页面展示越靠前。</p><h3>关于论文附件</h3><p>论文附件支持上传单个PDF电子书文件，大小限制为40MB以下。点击上传后的文件名后的‘’X‘’ 则删除附件。</p>
                                    <p>附件统一上传至‘本地存储目录+附件数据库位置+当前日期’文件夹下</p>
                                    <h3>关于上传图片内容</h3><p>图片上传功能支持上传jpg/jpeg/png/gif格式的图片。内容封面以及首页横幅图单张不得超过20MB，富文本内图片单张则不得超过10MB。<p><a href="https://www.bejson.com/ui/compress_img/" target="_blank">图片在线压缩</a>(强烈建议上传压缩后图片,以便优化访问速度,节省服务器存储空间)</p></p><p>图片统一上传至‘本地存储目录+图片数据库位置+当前日期’文件夹下</p>
                    </article>
            </div>
        </el-tabs>    

    </div>
    
</template>
<script>
import { getSession } from '@/utils/storage.js'
import { getPageConfigList,getSysConfigList} from '@/api/sysmag/pageCofig.js';


export default {
    setup() {
    },
    data() {
        return{
            type:'1',
            pageConfigLoading: true,
            sysConfigLoading:true,
            ExploreLoading:true,
            personalInfo:getSession('userInfo'),
            pageConfig:[],
            sysConfig:[],
            Explore:'',
            UserAgent:'',
        }
    },
    methods: {
        getPageConfigList() {
            getPageConfigList().then((res) => {
                        if(res.code == 200){
                            this.pageConfig = res.data;
                            this.pageConfigLoading = false;
                        }
            }).catch(() =>{
                        this.$message({
                            type: 'error',
                            message:"网络,请重试或者联系管理员！！"
                        });
            })
        },
        getSysConfigList(){
            getSysConfigList().then((res) => {
                        if(res.code == 200){
                            this.sysConfig = res.data;
                            this.sysConfigLoading=false;
                        }
            }).catch(() =>{
                        this.$message({
                            type: 'error',
                            message:"网络,请重试或者联系管理员！！"
                        });
            })
        },
        filter(val){
            switch (val){
                case '0':
                    return '关闭'; 
                case '1':
                    return '开启';
                default:
                    return val;  
            }
        },
        getExplore(){
            var Sys = {};  
            var ua = navigator.userAgent.toLowerCase();  
            var s;  
            (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? Sys.ie = s[1] :
            (s = ua.match(/msie ([\d\.]+)/)) ? Sys.ie = s[1] :  
            (s = ua.match(/edge\/([\d\.]+)/)) ? Sys.edge = s[1] :
            (s = ua.match(/firefox\/([\d\.]+)/)) ? Sys.firefox = s[1] :  
            (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? Sys.opera = s[1] :  
            (s = ua.match(/chrome\/([\d\.]+)/)) ? Sys.chrome = s[1] :  
            (s = ua.match(/version\/([\d\.]+).*safari/)) ? Sys.safari = s[1] : 0;  
            this.ExploreLoading=false;
            // 根据关系进行判断
            if (Sys.ie) return ('IE: ' + Sys.ie);  
            if (Sys.edge) return ('EDGE: ' + Sys.edge);
            if (Sys.firefox) return ('Firefox: ' + Sys.firefox);  
            if (Sys.chrome) return ('Chrome: ' + Sys.chrome);  
            if (Sys.opera) return ('Opera: ' + Sys.opera);  
            if (Sys.safari) return ('Safari: ' + Sys.safari);
            return 'Unkonwn';
        },
        showUserAgent() {
            return navigator.userAgent;
        }
    },
    created() {
        this.getPageConfigList();
        this.getSysConfigList();
        this.Explore=this.getExplore();
        this.UserAgent=this.showUserAgent();
    },
}
</script>
<style scoped lang="scss">
@import "@/theme/mixins/mixins.scss";
.card-header {
      justify-content: space-between;
      align-items: center;
      text-align: center;
  }
    
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 12px;
  }

  .box-card {
    width: 480px;
  }
.ms-doc{
        width:100%;
        /*max-width: 980px;*/
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    }
    .ms-doc h3{
        padding: 9px 10px 10px;
        margin: 0;
        font-size: 14px;
        line-height: 17px;
        background-color: #f5f5f5;
        border: 1px solid #d8d8d8;
        border-bottom: 0;
        border-radius: 3px 3px 0 0;
    }
    .ms-doc article{
        padding: 45px;
        word-wrap: break-word;
        background-color: #fff;
        border: 1px solid #ddd;
        border-bottom-right-radius: 3px;
        border-bottom-left-radius: 3px;
    }
    .ms-doc article h1{
        font-size:32px;
        padding-bottom: 20px;
        margin-bottom: 25px;
        border-bottom: 1px solid #ddd;
        text-align: center;
    }
    .ms-doc article h2{
        margin-top: 10px;
    }
    .ms-doc article p{
        margin-bottom: 5px;
        line-height: 2;
        text-indent: 25px;
    }
    .ms-doc article .el-checkbox{
        margin-bottom: 5px;
    }

</style>
