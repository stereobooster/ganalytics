var consent = "ga:consent";
var clientId = "ga:user";

export default function(ua, args, toWait) {
	args = Object.assign(
		{ tid: ua },
		args,
		localStorage[consent]
			? {
					cid: (localStorage[clientId] =
						localStorage[clientId] || Math.random() + "." + Math.random())
			  }
			: { uid: "anonymous", aip: 1 }
	);

	function send(type, opts) {
		if (!opts) opts = {};
		var k,
			str = "https://www.google-analytics.com/collect?v=1",
			d = document;
		var obj = Object.assign(
			{
				t: type,
				dl: location.href,
				dt: d.title,
				dr: d.referrer,
				sr: screen.width + "x" + screen.height,
				vp:
					Math.max(d.documentElement.clientWidth, innerWidth || 0) +
					"x" +
					Math.max(d.documentElement.clientHeight, innerHeight || 0)
			},
			args,
			opts,
			{ z: Date.now() }
		);
		for (k in obj) {
			// modified `obj-str` behavior
			if (obj[k]) str += "&" + k + "=" + encodeURIComponent(obj[k]);
		}
		new Image().src = str; // dispatch a GET
	}

	toWait || send("pageview");

	return { args, send };
}
