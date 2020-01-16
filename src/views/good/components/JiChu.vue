<template>
	<div class="jichu">
		<div class="good_lett">基础信息</div>
		
		
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="商品名:" prop="name">
				<el-input v-model="ruleForm.name"></el-input>
			</el-form-item>
			
			<el-form-item label="分享描述:" >
				<el-input v-model="ruleForm.share"></el-input>
			</el-form-item>
			
			<el-form-item label="商品卖点:" >
				<el-input v-model="ruleForm.sell"></el-input>
			</el-form-item>
			
			<el-form-item label="商品图:" prop="name">
				<el-upload
					class="avatar-uploader"
					action="https://jsonplaceholder.typicode.com/posts/"
					:show-file-list="false"
					:on-success="handleAvatarSuccess"
					:before-upload="beforeAvatarUpload">
					<img v-if="imageUrl" :src="imageUrl" class="avatar">
					<i v-else class="el-icon-plus avatar-uploader-icon"></i>
				</el-upload>
			</el-form-item>
			
			<el-form-item label="主图视频:">
				<el-upload
					class="avatar-uploader"
					action="https://jsonplaceholder.typicode.com/posts/"
					:show-file-list="false"
					:on-success="handleAvatarSuccess"
					:before-upload="beforeAvatarUpload">
					<img v-if="imageUrl" :src="imageUrl" class="avatar">
					<i v-else class="el-icon-plus avatar-uploader-icon"></i>
				</el-upload>
			</el-form-item>
			
			<el-form-item label="商品分组:" style="width: 46%;">
				<el-input v-model="ruleForm.langster" placeholder="选择商品分组"></el-input>
			</el-form-item>
			
			<el-form-item label="商品类目:" style="width: 50%;">
				<el-select v-model="value" filterable placeholder="选择所属行业类目">
					<el-option
						v-for="item in options"
						:key="item.value"
						:label="item.label"
						:value="item.value">
					</el-option>
				</el-select>
			</el-form-item>
		</el-form>
		
		
		
		
	</div>
</template>



<script>
export default {
	data() {
      return {
				imageUrl: '',
        ruleForm: {
          name: '',
					share: '',
					sell: '',
					langster: ''
        },
        rules: {
          name: [
            { required: true, message: '商品名称必须填写，最多100个字', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
        },
				options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
  },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
			handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    },
		
}
</script>

<style lang="scss" scoped>
.jichu {
	padding-top: 30px;
	padding-right: 10px;
	&>.good_lett {
		width: 100%;
		height: 50px;
		background: rgb(245, 247, 250);
		line-height: 50px;
		padding-left: 10px;
		margin-bottom: 20px;
		box-sizing: border-box;
	}
	&>.demo-ruleForm{
		width: 70%
	}
}
.avatar-uploader {
	border: 1px solid #ccc;
	width: 70px
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
	cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 70px;
  height: 70px;
  line-height: 70px;
  text-align: center;
}
.avatar {
  width: 70px;
  height: 70px;
  display: block;
}




</style>