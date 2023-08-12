function caesar_encode(){
	text = document.getElementById("caesar").value;
	alert(text);
}

function caesar_decode(){
	text = document.getElementById("caesar").value;
	alert(text);
}

function en_to_zh_translate(){
	//http://api.fanyi.baidu.com/api/trans/product/desktop?req=detail
	var appid = '20230812001777955';
	var key = '9OS5pJkvTf9u4f0eCPL4';
	var salt = (new Date).getTime();
	var query = document.getElementById("trans").value;
	// 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
	var from = 'en';
	var to = 'zh';
	var str1 = appid + query + salt +key;
	var sign = MD5(str1);
	$.ajax({
		url: 'https://api.fanyi.baidu.com/api/trans/vip/translate',
		type: 'get',
		dataType: 'jsonp',
		data: {
			q: query,
			appid: appid,
			salt: salt,
			from: from,
			to: to,
			sign: sign
		},
		success: function (data) {
			console.log(data)
			document.getElementById("trans").value = data.trans_result == null ? "错误的单词" : data.trans_result[0].dst;
		}
	});
}

function zh_to_en_translate(){
	//http://api.fanyi.baidu.com/api/trans/product/desktop?req=detail
	var appid = '20230812001777955';
	var key = '9OS5pJkvTf9u4f0eCPL4';
	var salt = (new Date).getTime();
	var query = document.getElementById("trans").value;
	// 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
	var from = 'zh';
	var to = 'en';
	var str1 = appid + query + salt +key;
	var sign = MD5(str1);
	$.ajax({
		url: 'https://api.fanyi.baidu.com/api/trans/vip/translate',
		type: 'get',
		dataType: 'jsonp',
		data: {
			q: query,
			appid: appid,
			salt: salt,
			from: from,
			to: to,
			sign: sign
		},
		success: function (data) {
			document.getElementById("trans").value = data.trans_result == null ? "Error" : data.trans_result[0].dst;
		}
	});
}
