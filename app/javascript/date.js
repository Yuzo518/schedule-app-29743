function date_check() {
  console.log("date_check読み込み完了");

  // date_patternの値の取得
  const elements = document.getElementsByName("date_pattern")
  
  // 読み込み時『通常』を選択する
  elements[0].checked = true;

  // 開始時間の値を取得する
  const start_time_year   = document.getElementById("_start_time_1i")
  const start_time_month  = document.getElementById("_start_time_2i")
  const start_time_day    = document.getElementById("_start_time_3i")
  const start_time_hour   = document.getElementById("_start_time_4i")
  const start_time_minute = document.getElementById("_start_time_5i")

  // 終了時間の値を取得する
  const ending_time_year   = document.getElementById("_ending_time_1i")
  const ending_time_month  = document.getElementById("_ending_time_2i")
  const ending_time_day    = document.getElementById("_ending_time_3i")
  const ending_time_hour   = document.getElementById("_ending_time_4i")
  const ending_time_minute = document.getElementById("_ending_time_5i")


  // 共通処理
  //（開始時間の『年・月・日』が変更されたら終了時間も同様に変更する）
  start_time_year.addEventListener('change', function() {
    ending_time_year.value = start_time_year.value
  });
  start_time_month.addEventListener('change', function() {
    ending_time_month.value = start_time_month.value
  });
  start_time_day.addEventListener('change', function() {
    ending_time_day.value = start_time_day.value
  });
  //（終了時間の『年・月・日』が変更されたら開始時間も同様に変更する）
  ending_time_year.addEventListener('change', function() {
    start_time_year.value = ending_time_year.value
  });
  ending_time_month.addEventListener('change', function() {
    start_time_month.value = ending_time_month.value
  });
  ending_time_day.addEventListener('change', function() {
    start_time_day.value = ending_time_day.value
  });


  // 分岐処理
  // 時刻の設定
  //「通常」選択時=>特になし
  //「締切」選択時=>開始時間＝終了時間
  //「終日」選択時=>開始時間を「08」,終了時間を「20」
  start_time_hour.addEventListener('change', () => {
    let str = "";
    const checked_list = document.getElementsByName("date_pattern");
    for (let i = 0; i < checked_list.length; i++){
      if(checked_list[i].checked){
        str = checked_list[i].value;
        break;
      }
    }
    if (str == "締切") {
      ending_time_hour.value = start_time_hour.value
    } else if (str == "終日") {
      start_time_hour.value    = "08"
      ending_time_hour.value   = "20"
      ending_time_minute.value = "00"
      start_time_minute.value  = "00"
    }
  });
  ending_time_hour.addEventListener('change', () => {
    let str = "";
    const checked_list = document.getElementsByName("date_pattern");
    for (let i = 0; i < checked_list.length; i++){
      if(checked_list[i].checked){
        str = checked_list[i].value;
        break;
      }
    }
    if (str == "締切") {
      start_time_hour.value = ending_time_hour.value
    } else if (str == "終日") {
      start_time_hour.value    = "08"
      ending_time_hour.value   = "20"
      ending_time_minute.value = "00"
      start_time_minute.value  = "00"
    }
  });

  // 分の設定
  //「通常」選択時=>特になし
  //「締切」選択時=>開始時間＝終了時間
  //「終日」選択時=>開始時間を「00」,終了時間を「00」
  start_time_minute.addEventListener('change', () => {
    let str = "";
    const checked_list = document.getElementsByName("date_pattern");
    for (let i = 0; i < checked_list.length; i++){
      if(checked_list[i].checked){
        str = checked_list[i].value;
        break;
      }
    }
    if (str == "締切") {
      ending_time_minute.value = start_time_minute.value
    }else if (str == "終日") {
      start_time_hour.value    = "08"
      ending_time_hour.value   = "20"
      ending_time_minute.value = "00"
      start_time_minute.value  = "00"
    }
  });
  ending_time_minute.addEventListener('change', () => {
    let str = "";
    const checked_list = document.getElementsByName("date_pattern");
    for (let i = 0; i < checked_list.length; i++){
      if(checked_list[i].checked){
        str = checked_list[i].value;
        break;
      }
    }
    if (str == "締切") {
      start_time_minute.value = ending_time_minute.value
    }else if (str == "終日") {
      start_time_hour.value    = "08"
      ending_time_hour.value   = "20"
      ending_time_minute.value = "00"
      start_time_minute.value  = "00"
    }
  });

  // 「通常」選択時
  elements[0].addEventListener("click", () => {
    console.log(`${elements[0].value}が選択されました`);
  });

  // 「締切」選択時
  elements[1].addEventListener("click", () => {
    console.log(`${elements[1].value}が選択されました`);
    start_time_hour.value = ending_time_hour.value
    ending_time_minute.value = start_time_minute.value
  });

  // 「終日」選択時
  elements[2].addEventListener("click", () => {
    console.log(`${elements[2].value}が選択されました`);
    // 時刻を08時00分~20時00分に設定する
    start_time_hour.value    = "08"
    ending_time_hour.value   = "20"
    ending_time_minute.value = "00"
    start_time_minute.value  = "00"
  });

}

function edit_check() {
  console.log("edit_check読み込み完了");

  // date_patternの値の取得
  const elements = document.getElementsByName("plan[date_pattern]")

  // 開始時間の値を取得する
  const start_time_year   = document.getElementById("plan_start_time_1i")
  const start_time_month  = document.getElementById("plan_start_time_2i")
  const start_time_day    = document.getElementById("plan_start_time_3i")
  const start_time_hour   = document.getElementById("plan_start_time_4i")
  const start_time_minute = document.getElementById("plan_start_time_5i")

  // 終了時間の値を取得する
  const ending_time_year   = document.getElementById("plan_ending_time_1i")
  const ending_time_month  = document.getElementById("plan_ending_time_2i")
  const ending_time_day    = document.getElementById("plan_ending_time_3i")
  const ending_time_hour   = document.getElementById("plan_ending_time_4i")
  const ending_time_minute = document.getElementById("plan_ending_time_5i")


  // 共通処理
  //（開始時間の『年・月・日』が変更されたら終了時間も同様に変更する）
  start_time_year.addEventListener('change', function() {
    ending_time_year.value = start_time_year.value
  });
  start_time_month.addEventListener('change', function() {
    ending_time_month.value = start_time_month.value
  });
  start_time_day.addEventListener('change', function() {
    ending_time_day.value = start_time_day.value
  });
  //（終了時間の『年・月・日』が変更されたら開始時間も同様に変更する）
  ending_time_year.addEventListener('change', function() {
    start_time_year.value = ending_time_year.value
  });
  ending_time_month.addEventListener('change', function() {
    start_time_month.value = ending_time_month.value
  });
  ending_time_day.addEventListener('change', function() {
    start_time_day.value = ending_time_day.value
  });


  // 分岐処理
  // 時刻の設定
  //「通常」選択時=>特になし
  //「締切」選択時=>開始時間＝終了時間
  //「終日」選択時=>開始時間を「08」,終了時間を「20」
  start_time_hour.addEventListener('change', () => {
    let str = "";
    const checked_list = document.getElementsByName("plan[date_pattern]");
    for (let i = 0; i < checked_list.length; i++){
      if(checked_list[i].checked){
        str = checked_list[i].value;
        break;
      }
    }
    if (str == "締切") {
      ending_time_hour.value = start_time_hour.value
    } else if (str == "終日") {
      start_time_hour.value    = "08"
      ending_time_hour.value   = "20"
      ending_time_minute.value = "00"
      start_time_minute.value  = "00"
    }
  });
  ending_time_hour.addEventListener('change', () => {
    let str = "";
    const checked_list = document.getElementsByName("plan[date_pattern]");
    for (let i = 0; i < checked_list.length; i++){
      if(checked_list[i].checked){
        str = checked_list[i].value;
        break;
      }
    }
    if (str == "締切") {
      start_time_hour.value = ending_time_hour.value
    } else if (str == "終日") {
      start_time_hour.value    = "08"
      ending_time_hour.value   = "20"
      ending_time_minute.value = "00"
      start_time_minute.value  = "00"
    }
  });

  // 分の設定
  //「通常」選択時=>特になし
  //「締切」選択時=>開始時間＝終了時間
  //「終日」選択時=>開始時間を「00」,終了時間を「00」
  start_time_minute.addEventListener('change', () => {
    let str = "";
    const checked_list = document.getElementsByName("plan[date_pattern]");
    for (let i = 0; i < checked_list.length; i++){
      if(checked_list[i].checked){
        str = checked_list[i].value;
        break;
      }
    }
    if (str == "締切") {
      ending_time_minute.value = start_time_minute.value
    }else if (str == "終日") {
      start_time_hour.value    = "08"
      ending_time_hour.value   = "20"
      ending_time_minute.value = "00"
      start_time_minute.value  = "00"
    }
  });
  ending_time_minute.addEventListener('change', () => {
    let str = "";
    const checked_list = document.getElementsByName("plan[date_pattern]");
    for (let i = 0; i < checked_list.length; i++){
      if(checked_list[i].checked){
        str = checked_list[i].value;
        break;
      }
    }
    if (str == "締切") {
      start_time_minute.value = ending_time_minute.value
    }else if (str == "終日") {
      start_time_hour.value    = "08"
      ending_time_hour.value   = "20"
      ending_time_minute.value = "00"
      start_time_minute.value  = "00"
    }
  });

  // 「通常」選択時
  elements[0].addEventListener("click", () => {
    console.log(`${elements[0].value}が選択されました`);
  });

  // 「締切」選択時
  elements[1].addEventListener("click", () => {
    console.log(`${elements[1].value}が選択されました`);
    start_time_hour.value = ending_time_hour.value
    ending_time_minute.value = start_time_minute.value
  });

  // 「終日」選択時
  elements[2].addEventListener("click", () => {
    console.log(`${elements[2].value}が選択されました`);
    // 時刻を08時00分~20時00分に設定する
    start_time_hour.value    = "08"
    ending_time_hour.value   = "20"
    ending_time_minute.value = "00"
    start_time_minute.value  = "00"
  });

}
window.addEventListener("turbolinks:load", date_check);
window.addEventListener("turbolinks:load", edit_check);
