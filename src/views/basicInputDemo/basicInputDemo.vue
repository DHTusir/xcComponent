<template>
    <div class="demoWrap">
        <div class="describeBox">
            <xc-showCodeCard headerText="basicInput基础输入框 介绍" :textFilePath="filePath">
                <template v-slot:describe>                   
                    <h2>
                    输入框<br/>
                    简易表单输入框，一般用于一大块表单的填写<br/>
                    添加边框样式，传入属性（ xcBorder ）<br/>
                    单下边框线，传入属性（ sigleLine ）<br/>
                    添加clearable属性时,在桌面端点击清除按钮无效，需安装模块进行适配<br/>
                    </h2>
                </template>
            </xc-showCodeCard>
            <h3>basicInput props</h3>
            <xc-tableCode border :columns="propColumns" :content="propTableData"></xc-tableCode>
            <br />
            <!-- <h3>basicInput events</h3>
            <xc-tableCode border :columns="eventColumns" :content="eventTableData"></xc-tableCode> -->
        </div>
        <div class="demoBox1"></div>
        <div class="demoBox">
            <div class="phoneHeader">
                <van-nav-bar
                    title="basicInput 输入"
                    left-arrow
                    />
            </div>
            <div class="phoneContent">             
                <span class="title-divider">全边框输入</span>
                <div class="whiteBackground">      
                    <van-space direction="vertical" fill>
                        <xc-basicInput
                            v-model="username"
                            name="用户名"
                            xcBorder
                            clearable
                            placeholder="请输入手机号码"
                        />
                        <xc-basicInput
                            v-model="password"
                            type="password"
                            name="密码"
                            xcBorder
                            placeholder="请输入登陆密码"
                        />
                    </van-space>               
                </div>
                <van-space direction="vertical" fill>
                <span class="title-divider">单底线输入框</span>  
                <div class="whiteBackground">    
                    <xc-basicInput 
                        left-icon="contact"
                        sigleLine
                        v-model="username1"
                        placeholder="请输入您的帐户名"
                    ></xc-basicInput>
                    <xc-basicInput 
                        type="password" 
                        left-icon="lock"
                        v-model="password1"
                        sigleLine
                        placeholder="请输入密码"
                    ></xc-basicInput>                
                </div>
                
                <span class="title-divider">基本输入</span>
                <div class="whiteBackground">      
                    <van-space direction="vertical" fill>
                        <xc-basicInput 
                            xcBorder
                            v-model="text"
                            label="文本"
                            left-icon="smile-o"
                            right-icon="warning-o"
                            placeholder="请输入"
                        >
                        </xc-basicInput>
                        <xc-basicInput 
                            xcBorder
                            :formatter="formatter"
                            v-model="phoneNumber"
                            type="tel"
                            placeholder="请输入"
                        >
                        <template  #label>    
                            <span style="margin-right: 0.8rem;">
                                手机号
                            </span>
                            <xc-button 
                                type="info" 
                                width="auto" 
                                height="2.5rem" 
                                size="mini" 
                                @click="phoneNum()" 
                                ref="certifyButton" 
                                >+86 中国大陆
                            </xc-button>
                        </template>
                        </xc-basicInput>
                        <xc-basicInput 
                            xcBorder
                            type="digit" 
                            v-model="number"
                            label="整数"
                            placeholder="请输入"
                        ></xc-basicInput>
                        <xc-basicInput 
                            xcBorder
                            v-model="text1"
                            type="password" 
                            label="账号密码"
                            placeholder="请输入账号密码"
                            input-align="right"
                        >
                                                
                        <!-- right-icon="eye" -->
                        </xc-basicInput>
                        <xc-basicInput
                            xcBorder
                            v-model="sms"
                            center
                            clearable
                            placeholder="请输入短信验证码"
                        >
                            <!-- label="短信验证码" -->
                        <template  #button>
                            <xc-button 
                                type="info" 
                                width="12.5rem" 
                                height="3rem" 
                                size="mini" 
                                @click="certify()" 
                                ref="certifyButton" 
                                :disabled="certifyDisabled"
                                >{{certifyText}}
                            </xc-button>
                        </template>
                        </xc-basicInput>
                    </van-space>
                </div>                
                <span class="title-divider">简易表单输入框</span>
                <div class="blackBackground">  
                    <van-space direction="vertical" fill>                        
                        <xc-basicInput 
                            v-model="text1"
                            label="文本"
                            left-icon="smile-o"
                            right-icon="warning-o"
                            placeholder="请输入"
                        ></xc-basicInput> 
                        <xc-basicInput 
                            v-model="text1"
                            label="文本" 
                            model-value="输入框只读" 
                            readonly
                        ></xc-basicInput> 
                        <xc-basicInput 
                            v-model="text1"
                            label="文本" 
                            readonly
                        >
                            <template  #label>    
                                <span style="margin-right: 0.8rem;">
                                    手机号
                                </span>
                                <xc-button 
                                    type="info" 
                                    width="auto" 
                                    height="2.5rem" 
                                    size="mini" 
                                    @click="phoneNum()" 
                                    ref="certifyButton" 
                                    >+86 中国大陆
                                </xc-button>
                            </template>
                            <template  #button>
                                <xc-button 
                                    type="info" 
                                    width="2.5rem" 
                                    height="3rem" 
                                    size="mini" 
                                    >A
                                </xc-button>
                            </template>
                        </xc-basicInput> 
                        <xc-basicInput 
                            v-model="text1"
                            label="文本" 
                            model-value="输入框已禁用" 
                            disabled
                        ></xc-basicInput> 
                        <xc-basicInput 
                            v-model="text1"
                            rows="1"
                            autosize
                            label="留言"
                            type="textarea"
                            placeholder="请输入留言"
                        ></xc-basicInput> 
                        <xc-basicInput 
                            v-model="text1"
                            label="文本"
                            placeholder="输入框内容右对齐"
                            input-align="right"
                        ></xc-basicInput> 
                    </van-space>
                </div>
                </van-space>
            </div>
        </div>
    </div>
</template>
<script setup name="basicInputDemo">
    import { ref } from 'vue'
    const propColumns = ref([
        {
          title: "属性",
          key: "attrName",
        },
        {
          title: "说明",
          key: "explain",
        },
        {
          title: "类型",
          key: "type",
        },
        {
          title: "默认值",
          key: "defaultValue",
        }
    ])    
    const propTableData = ref([
        {
          attrName: "sigleLine",
          explain: "可以设置单独的下边框",
          type: "Boolean",
          defaultValue: "false",
        },{
          attrName: "xcBorder",
          explain: "可以设置全边框",
          type: "Boolean",
          defaultValue: "false",
        }
    ])
    const username = ref('');
    const password = ref('');
    const username1 = ref('');
    const password1 = ref('');
    const text1 =ref("")
    const text =ref("你的输入！！！")
    const phoneNumber =ref("")
    const number =ref("")
    const sms =ref("")
    let certifyText =ref("获取短信验证码")
    let countdown =ref(5)
    let certifyDisabled =ref(false)
    const filePath = ref('static/views/basicInputDemo/basicInputDemoCode.txt')
    let myVar;
    const phoneNum= ()=>{
        alert("+86 手机号");               
    }
    const certify = ()=>{
        alert("发送成功");        
        myVar = setInterval(function(){settime()} ,1000)
    }
    const settime = () => { 
        if (countdown.value == 0) { 
            certifyDisabled.value =false;
            certifyText.value ="获取短信验证码"; 
            countdown.value = 5; 
            clearInterval(myVar);
        } else { 
            certifyDisabled.value =true;
            certifyText.value="重新发送(" + countdown.value + ")"; 
            countdown.value--; 
        } 
    }
    const formatter = (value) => value.replace(/\D/g,'');
</script>
<style scoped lang="less">
    .phoneContent{
        // background: #FFFFFF;
        border-radius: 0px;
        padding: 16px 0px;  
        .whiteBackground{ 
            padding:  16px;
            background-color: white;
        }.blackBackground{
            padding:0px 16px;
            background-color: none;
        }
        .title-divider{    
            padding: 16px 16px;
            display: flex;
            align-items: center;
            margin: var(--van-divider-margin);
            color: var(--van-divider-text-color);
            font-size: var(--van-divider-font-size);
            line-height: var(--van-divider-line-height);
            border-color: var(--van-divider-border-color);
            border-style: solid;
            border-width: 0;
            margin: 0;
            color: #969799;
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;            
        }
    }
</style>
