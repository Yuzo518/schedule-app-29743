function search() {
  console.log("読み込み完了");
  const users = document.querySelectorAll('.search-users');

  users.forEach(function (user) {
    user.addEventListener('change', () => {
      console.log(`${user.name}が選択したのはid:${user.value}です`);
      const XHR = new XMLHttpRequest();
      XHR.open("GET", `/plans/search/${user.name}/${user.value}`, true);
      XHR.responseType = "json";
      XHR.send();
      XHR.onload = () => {
        if (XHR.status != 200) {
          alert(`Error ${XHR.status}: ${XHR.statusText}`);
          return null;          
        }
        const plans = XHR.response.plans;
        plans.forEach(function (plan){
          console.log(`取得したplanは${plan.id}です`);
        });
      };
    });
  }); 
}
//window.addEventListener("turbolinks:load", search);
//window.addEventListener("load", search);