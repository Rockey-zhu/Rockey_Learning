<template>
    <div class="layout">
        <Layout>
            <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
                <Menu active-name="1-1" theme="dark" width="auto" :class="menuitemClasses">
                    
                    <MenuItem name="1-1">
                    <router-link tag="span" to="/home/demo1" style="width:100%">
                        <Icon type="ios-navigate"></Icon>
                        <span>Option 1</span>
                    </router-link>
                    </MenuItem>

                    <MenuItem name="1-2">
                     <router-link tag="span" to="/home/demo2" style="width:100%">
                        <Icon type="ios-search"></Icon>
                        <span>Option 2</span>
                     </router-link>   
                    </MenuItem>

                    <MenuItem name="1-3">
                    <router-link tag="span" to="/home/demo3" style="width:100%">
                        <Icon type="ios-settings"></Icon>
                        <span>Option 3</span>
                    </router-link>
                    </MenuItem>

                    <MenuItem name="1-4">
                    <router-link tag="span" to="/home/storeCeshi" style="width:100%">
                        <Icon type="ios-settings"></Icon>
                        <span>Option 4</span>
                    </router-link>
                    </MenuItem>
                    <MenuItem name="1-5">
                    <router-link tag="span" to="/home/table" style="width:100%">
                        <Icon type="ios-settings"></Icon>
                        <span>Option 5</span>
                    </router-link>
                    </MenuItem>
                    <MenuItem name="1-6">
                    <router-link tag="span" to="/home/shopmart" style="width:100%">
                        <Icon type="ios-search"></Icon>
                        <span>Option 6</span>
                    </router-link>
                    </MenuItem>
                    <MenuItem name="1-7">
                    <router-link tag="span" to="/home/demo4" style="width:100%">
                        <Icon type="ios-search"></Icon>
                        <span>echarts 图</span>
                    </router-link>
                    </MenuItem>
                    <MenuItem name="1-8">
                    <router-link tag="span" to="/home/demo5" style="width:100%">
                        <Icon type="ios-search"></Icon>
                        <span>echarts 图</span>
                    </router-link>
                    </MenuItem>
                </Menu>
            </Sider>
            <Layout>
                <Header :style="{padding: 0}" class="layout-header-bar">
                    <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
                </Header>
                <Content :style="{margin: '20px', background: '#fff', minHeight: '863px'}">
                     
                    <!-- 记得加路由视图，否则不显示 -->
                    <router-view />
                </Content>
            </Layout>
        </Layout>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                isCollapsed: false
            }
        },
        computed: {
            rotateIcon () {
                return [
                    'menu-icon',
                    this.isCollapsed ? 'rotate-icon' : ''
                ];
            },
            menuitemClasses () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
        methods: {
            collapsedSider () {
                this.$refs.side1.toggleCollapse();
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .menu-icon{
        transition: all .3s;
    }
    .rotate-icon{
        transform: rotate(-90deg);
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
</style>
