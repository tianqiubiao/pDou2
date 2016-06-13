/*
* 对顶部和底部进行缓存，中间进行更新（locastorge缓存）
*
* locastorge缓存数据
* cookie存储密码加上唯一标识码防止通过cookie入侵更改数据
* */



function setCookie(c_name, value, millisec) {
	var exdate = new Date()
	exdate.setTime(exdate.getTime() + millisec)
	document.cookie = c_name + "=" + escape(value)
			+ ((millisec == null) ? "" : ";expires=" + exdate.toGMTString())
}

function getCookie(c_name) {
	if (document.cookie.length > 0) {
		c_start = document.cookie.indexOf(c_name + "=")
		if (c_start != -1) {
			c_start = c_start + c_name.length + 1
			c_end = document.cookie.indexOf(";", c_start)
			if (c_end == -1)
				c_end = document.cookie.length
			return unescape(document.cookie.substring(c_start, c_end))
		}
	}
	return ""
}

