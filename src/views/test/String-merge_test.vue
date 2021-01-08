<template>
<div>
</div>
</template>

<script lang="ts">
export default {
data() {
return {
  d: '5a1b1cE2cEd2b467e1314d3bbd6b1c345E3ccE',
  b: '5a1bbd3b12345d2b12345e111213d5bbd6b1c123E2ccE'
}
},
methods: {
  TestEdit(arr: string,obj: string,s=0,e=2,s2=0,e2=2,$Connector = '') {
    let shuju = arr.slice(s,e)
    let shuju1 = obj.slice(s2,e2)
    
    let judge = arr.slice(s+1,e) === arr.slice(e,e+1)
    let judge2 = obj.slice(s2+1,e2) === obj.slice(e2,e2+1)

    if(shuju===shuju1){
      // console.log(judge,judge2,arr.slice(e,e+1),arr.slice(e+1,e+2));
      if(judge && arr.slice(s+1,e).match(/[a]/ig)){
        endData += shuju1+arr.slice(s+1,e)
        return
      }
      if(judge2 && obj.slice(s2+1,e2).match(/[a]/ig)){
        endData += shuju1+obj.slice(s2+1,e2)
        return
      }

      if(judge){
        endData += shuju1+arr.slice(s+1,e)+ ($Connector?$Connector:arr.slice(e+1,e+2))
        let text = arr.slice(e+2)
        if(arr.slice(e+1,e+2)==='' || obj.indexOf(arr.slice(e+1,e+2))===-1){
          return
        }else{
          let text2 = obj.slice(obj.indexOf(arr.slice(e+1,e+2))+1)
          TestEdit(text,text2)
          return
        }
      }
      if(judge2){

        endData += shuju1+obj.slice(s2+1,e2)+($Connector?$Connector:obj.slice(e2+1,e2+2))
        let text = obj.slice(e2+2)
        
        if(obj.slice(e2+1,e2+2)==='' || arr.indexOf(obj.slice(e2+1,e2+2))===-1){
          return
        }else{
          let text2 = arr.slice(arr.indexOf(obj.slice(e2+1,e2+2))+1)
          TestEdit(text,text2)
          return
        }
      }

      if(endData.indexOf(shuju1)===-1){
        console.error(shuju1,$Connector,endData)
        if($Connector){
          if(endData.slice(endData.length-1)!==$Connector){
            endData += $Connector+shuju1
          }else{
            endData +=shuju1
          }
        }else{
          endData += shuju1
        }
      }
      let text = arr.slice(e)
      let text2 = obj.slice(e2)
      TestEdit(text,text2)
    }else{
      // if(String(Number(shuju)) !== 'NaN'){
      //   endData += shuju
      // }
      // if(String(Number(shuju1)) !== 'NaN'){
      //   endData += shuju1
      // }
    
      // 第一种都需要切割
      if(arr.match(/[b-d]/ig) && obj.match(/[b-d]/ig)){
        console.log('-------------------');
        console.log(arr,obj);
        console.log(arr.split('d'));
        console.log(obj.split('d'));
        console.log('---------------------需要切割');
        let TestArray1 = arr.split('d')
        let TestArray2 = obj.split('d')

        let Judge = false
        let JudgeArray = []
        for (let ind = 0; ind < TestArray1.length; ind++) {
          for (let inde = 0; inde < TestArray2.length;inde++) {
            let TestArray1shuju = TestArray1[ind].slice(s,e)
            let TestArray2shuju = TestArray2[inde].slice(s2,e2)
            if(TestArray1shuju===TestArray2shuju){
              TestEdit(TestArray1[ind],TestArray2[inde],0,2,0,2,'d')
              // TestArray1.splice(ind,1)
              // TestArray2.splice(inde,1)
              // ind = 0
              // inde = 0
              Judge = true
            }else{
              // inde++
            }
          }
          // console.log(TestArray1,inde);
          if(!Judge){
            JudgeArray.push(TestArray1[ind])
            TestArray1.splice(ind,1)
            // ind = 0
            // inde = 0
            // if(ind>TestArray1.length || inde >TestArray2.length){
            //   return
            // }
          }
        }
        
        return
        // console.log(JudgeArray,TestArray1,TestArray2);
      }
      // 第二种只有他或他需要切割
      if(arr.match(/[b-d]/ig) && !obj.match(/[b-d]/ig)){
        endData += obj + arr
        return
      }
      if(!arr.match(/[b-d]/ig) && obj.match(/[b-d]/ig)){
        endData += arr + obj
        return
      }
      // 第三种都不需要在进行切割
      if(!arr.match(/[b-d]/ig) && !obj.match(/[b-d]/ig)){
        let cuttingArr1 = arr.split('e')
        let cuttingArr2 = obj.split('e')
        let cuttingArr3 = [(cuttingArr1[0]?cuttingArr1[0]:'')+(cuttingArr2[0]?cuttingArr2[0]:''),(cuttingArr1[1]?cuttingArr1[1]:'')+(cuttingArr2[1]?cuttingArr2[1]:'')]
        cuttingArr3 = [unique(cuttingArr3[0].split('')).join(''),unique(cuttingArr3[1].match(/\d{2,2}/g)).join('')]
        endData += cuttingArr3.join('e')
        return
      }

      // console.log(shuju,shuju1,arr,obj);
    }
    // 现在所做到的结果
    // 5a1bbd3bbd2b1234567e11121314d6b1c
    // 预期结果
    // 5a1bbd3bbd2b1234567e11121314d6b1c12345E3ccE2ccEd5bb
  }
              
}
}
</script>
<style lang='less' scoped>
</style>