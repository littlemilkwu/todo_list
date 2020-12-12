$(function() {
  // 新增項目
	$("#submit").on("click", newToDo)
  $("#text").on("keypress", function (e){
    var key = (e.keyCode ? e.keyCode : e.which)
    if(key == 13) newToDo();
  })
  
  // 清除所有
  $("#clear").on("click", function() {
    if(confirm("確定要清除所有項目嗎？")){
      $(".li-div").remove()
    }
  })
  
  // todo -> done
  $("#todo").on("click", ".todo-item-btn", {where:"done"}, change)

  // todo <- done
	$("#done").on("click", ".done-item-btn", {where:"todo"}, change)
  
  // 清除單一
  $('.center-div').on("click", ".rm-btn", remove)
})

function createNewDiv(where, content){
  var tmDiv = $("<div class='li-div'></div>")
  var tmChe = $("<input>")
  var tmInput = $("<input>")
  var tmRm = $("<input>")
  tmInput.addClass("item-input")
  tmInput.addClass(where)
  tmInput.val(content)
  tmChe.attr("type","checkbox")
  tmChe.addClass(where+"-btn")
  if(where == "done-item"){
    tmChe.attr("checked", true)
  }
  tmRm.attr("type", "button")
  tmRm.addClass("rm-btn")
  tmRm.val("X")
  tmDiv.append(tmChe)
  tmDiv.append(" ")
  tmDiv.append(tmInput)
  tmDiv.append(" ")
  tmDiv.append(tmRm)
  return tmDiv;
}

// 新增項目
function newToDo(){
	  if($("#text").val()){
	    // if input not empty
	    var content = $("#text").val()
      var newDiv = createNewDiv("todo-item", content)
	    $("#text").val("")
	    $("#todo div.left-div").append(newDiv)
	  }else {
	    // if input empty
	    alert("can't be empty")
	  }
}

// 換位置
function change(e) {
  var content = $(this).next().val();
  var newDiv = createNewDiv(e.data.where+"-item", content)
  $("#"+e.data.where+" div.left-div").append(newDiv)
  $(this).parent().remove();
}

function remove(){
  $(this).parent().remove();
}