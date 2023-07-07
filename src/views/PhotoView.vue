<template>
  <div>
    <HeaderApp />
    <div class="flex justify-center ">
      <SideBar />
      <img src="https://www.ca-decor.com/wp-content/uploads/2019/01/20190111_%E0%B9%91%E0%B9%99%E0%B9%90%E0%B9%91%E0%B9%91%E0%B9%91_0025.jpg"
      class="transform transition-all hover:scale-125">
    </div>
  </div>
</template>

<script>
import SideBar from "@/sidebar/SideBar.vue";
import HeaderApp from "@/components/HeaderApp.vue";
import firebase from 'firebase/app';
import 'firebase/storage';
export default {
  components: { SideBar, HeaderApp },

  data() {
    return {
      selectedFile: null,
    };
  },
  methods: {
    handleImageChange(event) {
      // ทำสิ่งที่คุณต้องการเมื่อมีการเปลี่ยนแปลงไฟล์รูปภาพ
      const selectedFile = event.target.files[0];
      console.log('Image changed:', selectedFile);
      // อัปโหลดรูปภาพไปยัง Firebase Storage หรือทำสิ่งอื่น ๆ ตามต้องการ
    },
    async uploadImage() {
      if (!this.selectedFile) return;

      const storageRef = firebase.storage().ref();
      const fileRef = storageRef.child(this.selectedFile.name);

      try {
        // อัปโหลดรูปภาพไปยัง Firebase Storage
        const snapshot = await fileRef.put(this.selectedFile);
        console.log('Image uploaded successfully:', snapshot.ref.fullPath);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    },
  },
};
</script>
