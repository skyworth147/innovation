<template>
    <div>

      <canvas id = 'canvas'></canvas>
    </div>
</template>

<script>
    export default {
        name: "upload-image",
      date() {
          return {
            imageURL: '',
            prop:['originImage']
          }
      },

      methods: {
        setImageURL: function(url){
          this.imageURL = url;
        },
          uploadImage: function(e){
            var originImage = e.target.files[0];
            // console.log(originImage);
            var reader = new FileReader();

            reader.onload = function(){
              var url = reader.result;
              // this.setImageURL(url);
              this.copperImage(url);
            }
          },

        copperImage(url){
          console.log('copper');
          var image = new Image();
          image.src = url;
          var canvas = document.getElementById('canvas');
          ctx = canvas.getContext('2d');
          ctx.drawImage(image, 0, 0, 200, 200, 0, 0);

        }


      }

    }
</script>

<style scoped>
  img{
    width:100%;
  }

</style>
