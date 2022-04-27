<template>

  <transition name="el-zoom-in-top">
    <div class="hello">
      <el-row :gutter="22">
        <el-col :span="12">
          <div class="left main-title">
            丰果后台<br />
            <p class="delete">消除中间商，做最便捷的水果配送</p>
          </div>
        </el-col>
        <el-col :span="10" :offset="0">
          <div class="right">
            <el-card class="box-card">
              <p class="title">会员在线</p>
              <el-form
                ref="form"
                :model="form"
                :rules="rules"
                label-width="80px"
              >
                <el-form-item label="用户名" prop="name">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pwd">
                  <el-input v-model="form.pwd"></el-input>
                </el-form-item>
                <el-form-item label="手机号码" prop="phone">
                  <el-input v-model="form.phone"></el-input>
                </el-form-item>
                <el-form-item label="验证码" prop="code">
                  <el-input v-model="form.code"></el-input>
                </el-form-item>
              </el-form>
              <el-button type="primary" @click="tologin">获取验证码</el-button>
              <el-button type="primary" @click="tologin">登陆</el-button>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </div>
  </transition>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    fater: Number,
  },
  data() {
    return {
      isshow: false,
      lastname: "",
      form: {
        name: "",
        pwd: "",
      },
      edit:{
        phone:''
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: "请输入密码", trigger: "blur" },
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
          phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { min: 11, max: 11, message: '请输入11位手机号', trigger: 'blur' },
          
        //  pattern : /^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])\\d{8}$/,

        //  message : "请输入正确的手机号",
        ],
        code: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
      },
    };
  },
  methods: {
    catinput() {
      this.lastname = "dddd";
      console.log(this.lastname);
    },
    totest() {
      this.$router.push({
        name: "test",
        params: { name: "wangzhen", age: 30 },
        query: { token: "ydhddjjddjdjdjj" },
      });
    },
    tologin() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          if (
            this.form.name == "admin" &&
            this.form.pwd == "admin" &&
            this.form.code == "12345" &&
            this.form.phone != "0" 
             )

          {
            window.localStorage.setItem("token", "dddddddd");
            window.sessionStorage.setItem("token", "hdhhhdhdhdhdhd");
            this.$message({
              message: "欢迎你，登陆成功",
              type: "success",
            });
            this.$router.push("/home");
            
          } else {
            this.$message({
              message: "用户名或密码错误！",
              type: "error",
            });
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- varchar String char -->
<style lang="less" scoped>
.hello {
  height: 100%;
  background-color: #ccc;
  margin: 0;
  padding: 0;
}
.delete {
  font-size: 15px;
}
.left-f {
  background-color: aquamarine;
  width: 100%;
  height: 100%;
  position: absolute;
}
.main-title {
  font-size: 55px;
  color: #ffffff;
}
.left {
  text-align: center;
  height: 400px;
  margin-top: 35%;
}
.box-card {
  width: 400px;
  margin-top: 30%;
  text-align: center;
  font-size: 28px;
  .title {
    margin-bottom: 15px;
    color: black;
  }
}

</style>
