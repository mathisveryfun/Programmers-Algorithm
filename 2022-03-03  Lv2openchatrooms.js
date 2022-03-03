// 19시 27분 시작 23시 12분 종료 아직 완성 안된
function solution(record) {
    // input : ["(입장or퇴장) (uuid) (닉네임)"]
    // output : ["(이름)님이 (들어왔습니다)",... , "(이름)님이 (나갔습니다)"]
  
    // DB객체를 빈 객체로 선언  확인필요
    let db = {};
  
  
    // record 배열의 요소를 map로 순회하면서
    // 요소마다 split을 시켜서 2차원 배열로 만듦. el : "Enter uid1234 Muzi" => [상태, uuid, 닉네임] 코드 확인 완료
    // 그러면 record는 [2차원 배열이 됨]
    record = record.map(el => {
      return el.split(" ")
    })  
    // 메세지들을 모아 리턴할 result 빈 배열 선언
    let result = [];
  
    // 다시 새로운 record를 forEach로 순회하면서 메세지들을 result에 푸쉬해줄거임
    // record의 각각의 순회원소 el에 대해
    record.forEach((el) => {
    // el[0] 의 값이 Enter인지 Leave인지 Change인지확인
      // 분기1. 만약 el[0]의 값이 엔터이면
      if (el[0] === 'Enter') {
        // 분기1-1 만약 DB객체에 el[1]의 키의 값이 undefined라면 처음 온 사람일거임
        if (!db[el[1]]) {
          // DB객체에 uuid인 el[1] 키의 값으로 아이디 el[2] 를 넣어주고  확인필요
          db[el[1]] = el[2]                     
          //result에 배열로 메세지 푸쉬 [el[1] uuid, (el[2]) 닉네임, el[0] 상태]
          result.push([el[1], el[2], el[0]])
        // 븐기1-2 만약 DB객체에 el[1]의 값이 이미 있는사람이면 저장된 메세지들을 다 바꿔줘야함.  
        } else {
          // 메세지를 저장해둔 result 배열을 요소(resultEl)를 map으로 순회하면서 result를 다 바꿔버림
          result = result.map(resultEl => {
            //  만약 resultEl[0] === el[1] (el[1] uuid의 메세지가 존재하면 )
            if (resultEl[0] === el[1]) {
              // resultEL 원소의 기존 닉네임(resultEl[1])을 새로운 닉네임 el[2]로 모두 바꾸고  리턴 . map 이니
              resultEl[1] = el[2]
              return resultEl                  
            } else {
              // 아니라면  resultEl리턴
              return resultEl
            }         
          }) 
          //마지막으로 result에 배열로 메세지 푸쉬 [el[1] uuid, (el[2]) 닉네임, el[0] 상태]
          result.push([el[1], el[2], el[0]])     
        }
      // 분기2. 만약 el[0]의 값이 리브이면  
      } else if (el[0] === "Leave") {
        // result에 메세지 푸쉬 [el[1], el[2], el[0]] 근데 여기서 el[2] 닉네임은 input에 없음 그래서 DB가 필요하고 DB에서 꺼내와야함
        result.push([el[1], db[el[1]], el[0]])
      // 분기3. 만약 el[0]의 값이 체인지라면 DB에 있다는 말임 
      } else if (el[0] === "Change") {
        // 메세지를 저장해둔 result 배열을 요소(resultEl)을 map 메서드로 순회하면서 result를 갱신
        result = result.map(resultEl => {
          // resultEl[0] === el[1] (el[1] uuid의 메세지가 존재하면)
          if (resultEl[0] === el[1]) {
            // resultEl 원소의 닉네임(resultEl[1])을 아이디 el[2]로 모두 바꾸고 resultEl리턴 왜냐면 맵 함수니까
            resultEl[1] = el[2]
            return resultEl
          } else {
            // 아니면 걍 resulEl 리턴
            return resultEl
          }      
        })
      }
    })
    // console.log(result) // 여기까지 확인 완료!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    
    // record 순회 끝 그러면 지금 result 배열에는 최종적인 [uuid el[0] , 닉네임 el[1], 상태el[2] ] 예를들어 [  [ 'uid4567', 'Ryan', 'Enter' ]]  가 원소로 저장되어 있을거임.
    // 그러면 이제 메세지로 번역해야 됨
    // 다시 result를 map으로 요소 el을 순회하면서 record배열을 갱신 여기서 상태가 Enter냐 리브냐에 따라 메세지를나눠야됨
    result = result.map(el => {
     // 만약 상태 el[2]가 Enter라면 `${el[1]}님이 들어왔습니다`
     if (el[2] === "Enter") {
       return `${el[1]}님이 들어왔습니다.`
       } else if (el[2] === "Leave") {
     // 만약 상태 el[2]가 리브라면 `${el[1]}님이 나갔습니다`
       return `${el[1]}님이 나갔습니다.`        
       }     
     })     
    // 최종적으로 result 리턴
    return result
  }