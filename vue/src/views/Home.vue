<template>
  <div class="layout">
    <Layout>
      <Sider
        ref="side1"
        hide-trigger
        collapsible
        :collapsed-width="78"
        v-model="isCollapsed"
        style="height:1440px"
      >
        <!-- active可调整跳转页面显示 -->
        <Menu
          active-name="1-1"
          theme="dark"
          width="auto"
          :class="menuitemClasses"
        >
          <Submenu name="1">
            <template slot="title">
              <span>内容管理</span>
            </template>
            <MenuItem name="1-1" to="/home/ceshi1">内容简介</MenuItem>
            <MenuItem name="1-2" to="/home/ceshi2">新闻发布</MenuItem>
            <MenuItem name="1-3" to="/home/list">List列表</MenuItem>
          </Submenu>
          <!-- <MenuItem name="1-1">
            <router-link tag="span" to="/home/ceshi1" style="width: 100%">
              <Icon type="ios-navigate"></Icon>
              <span> 内容简介 </span>
            </router-link>
          </MenuItem>

          <MenuItem name="1-2">
          <router-link tag="span" to="/home/ceshi2" style="width:100%">
            <Icon type="ios-search"></Icon>
            <span> 新闻发布 </span>
            </router-link>
          </MenuItem>
         
          <MenuItem name="1-3">
          <router-link tag="span" to="/home/list" style="width:100%">
            <Icon type="ios-settings"></Icon>
            <span>List列表</span>
            </router-link>
          </MenuItem> -->

          <MenuItem name="2">
            <router-link tag="span" to="/home/ag" style="width:100%">
              <Icon type="md-disc"></Icon>
              <span>旅游介绍</span>
            </router-link>
          </MenuItem>

          <Submenu name="3">
            <template slot="title">
              <span>累加事件</span>
            </template>
            <MenuItem name="3-1" to="/home/svg">累加</MenuItem>
            <MenuItem name="3-2" to="/home/syg">累加函数</MenuItem>
            <MenuItem name="3-3" to="/home/exchange">vue-router传参</MenuItem>
            <MenuItem name="3-4" to="/home/click">事件绑定</MenuItem>
          </Submenu>

          <!-- <MenuItem name="1-5">
          <router-link tag="span" to="/home/svg" style="width:100%">
            <Icon type="md-disc"></Icon>
            <span>累加</span>
            </router-link>
          </MenuItem>

          <MenuItem name="1-6">
          <router-link tag="span" to="/home/syg" style="width:100%">
            <Icon type="md-disc"></Icon>
            <span>累加函数</span>
            </router-link>
          </MenuItem>

          
          <MenuItem name="1-7">
          <router-link tag="span" to="/home/exchange" style="width:100%">
            <Icon type="md-disc"></Icon>
            <span>vue-router传参</span>
            </router-link>
          </MenuItem>

          <MenuItem name="1-8">
          <router-link tag="span" to="/home/click" style="width:100%">
            <Icon type="ios-settings"></Icon>
            <span>事件绑定</span>
            </router-link>
          </MenuItem> -->

          <MenuItem name="4">
            <router-link tag="span" to="/home/life" style="width:100%">
              <Icon type="ios-settings"></Icon>
              <span>生命周期</span>
            </router-link>
          </MenuItem>

          <Submenu name="5">
            <template slot="title">
              <span>Vuex学习</span>
              <!-- //Menu导航菜单合并（抽屉） -->
            </template>

            <MenuItem name="5-2" to="/home/getter">vueX getter属性</MenuItem>
            <MenuItem name="5-3" to="/home/mutation"
              >vueX mutation属性</MenuItem
            >
            <MenuItem name="5-4" to="/home/action">vueX action异步</MenuItem>
          </Submenu>

          <MenuItem name="6">
            <router-link tag="span" to="/home/state" style="width:100%">
              <Icon type="ios-settings"></Icon>
              <span>vueX组件</span>
            </router-link>
          </MenuItem>

          <!-- <MenuItem name="1-11">
          <router-link tag="span" to="/home/getter" style="width:100%">
            <Icon type="ios-settings"></Icon>
            <span>vueX getter属性</span>
            </router-link>
          </MenuItem>

           <MenuItem name="1-12">
          <router-link tag="span" to="/home/mutation" style="width:100%">
            <Icon type="ios-settings"></Icon>
            <span>vueX mutation属性</span>
            </router-link>
          </MenuItem>

          <MenuItem name="1-13">
          <router-link tag="span" to="/home/action" style="width:100%">
            <Icon type="ios-settings"></Icon>
            <span>vueX action异步</span>
            </router-link>
          </MenuItem> -->

          <MenuItem name="7">
            <router-link tag="span" to="/home/button" style="width:100%">
              <Icon type="ios-settings"></Icon>
              <span>button状态</span>
            </router-link>
          </MenuItem>

          <MenuItem name="8">
            <router-link tag="span" to="/home/card" style="width:100%">
              <Icon type="ios-settings"></Icon>
              <span>card卡片</span>
            </router-link>
          </MenuItem>

          <Submenu name="9">
            <template slot="title">
              <span>VuewUI</span>
              <!-- //Menu导航菜单合并（抽屉） -->
            </template>

            <MenuItem name="9-1" to="/home/MenuPr">Menu顶部导航</MenuItem>
            <MenuItem name="9-2" to="/home/Form">表单</MenuItem>
            <MenuItem name="9-3" to="/home/menu">表单2</MenuItem>
            <MenuItem name="9-4" to="/home/view">视图</MenuItem>
            <MenuItem name="9-5" to="/home/view_1">视图2</MenuItem>
            <MenuItem name="9-7" to="/home/other_idea">其他组件</MenuItem>
          </Submenu>

          <MenuItem name="10">
            <router-link tag="span" to="/home/MessageBox" style="width:100%">
              <Icon type="ios-settings"></Icon>
              <span>上传信息</span>
            </router-link>
          </MenuItem>

          <MenuItem name="11">
            <router-link tag="span" to="/home/copy" style="width:100%">
              <Icon type="ios-settings"></Icon>
              <span>copy上传信息</span>
            </router-link>
          </MenuItem>

          <MenuItem name="12">
            <router-link tag="span" to="/home/lunbo" style="width:100%">
              <Icon type="ios-settings"></Icon>
              <span>轮播</span>
            </router-link>
          </MenuItem>

          <MenuItem name="13">
            <router-link tag="span" to="/home/table" style="width:100%">
              <Icon type="ios-settings"></Icon>
              <span>表格</span>
            </router-link>
          </MenuItem>

          <MenuItem name="14">
            <router-link tag="span" to="/home/mainFather" style="width:100%">
              <Icon type="ios-settings"></Icon>
              <span>父子搜索框watch联动</span>
            </router-link>
          </MenuItem>

          <MenuItem name="15">
            <router-link tag="span" to="/home/v-forList" style="width:100%">
              <Icon type="ios-settings"></Icon>
              <span>v-forList</span>
            </router-link>
          </MenuItem>
          <MenuItem name="16">
            <router-link tag="span" to="/home/v-jsoneditor" style="width:100%">
              <Icon type="ios-settings"></Icon>
              <span>v-jsoneditor</span>
            </router-link>
          </MenuItem>
          <MenuItem name="17">
            <router-link tag="span" to="/home/jsoneditor" style="width:100%">
              <Icon type="ios-settings"></Icon>
              <span>jsoneditor</span>
            </router-link>
          </MenuItem>
          <!-- <MenuItem name="14">
          <router-link tag="span" to="/home/路由懒加载1" style="width:100%">
            <Icon type="ios-settings"></Icon>
            <span>页面1</span>
            </router-link>
          </MenuItem>

          <MenuItem name="15">
          <router-link tag="span" to="/home/路由懒加载2" style="width:100%">
            <Icon type="ios-settings"></Icon>
            <span>页面2</span>
            </router-link>
          </MenuItem> -->
        </Menu>
      </Sider>
      <Layout>
        <Header :style="{ padding: 0 }" class="layout-header-bar">
          <Icon
            @click.native="collapsedSider"
            :class="rotateIcon"
            :style="{ margin: '0 20px' }"
            type="md-menu"
            size="24"
          ></Icon>
        </Header>
        <Content
          :style="{ margin: '20px', background: '#fff', minHeight: '260px' }"
        >
          <!-- 记得加路由视图，否则不显示 -->
          <router-view />
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapsed: false
    };
  },
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    },
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  },
  methods: {
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    }
  }
};
</script>
<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  height: 100vh;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>
