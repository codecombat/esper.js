var i = 0;
function inspect(x) {
	console.log(++i, typeof x, x);
}

inspect(new Boolean('Rob'));
inspect(new Boolean(7));
inspect(new Boolean(0));
inspect(new Boolean('0'));
inspect(new Boolean(false));
inspect(new Boolean('false'));
inspect(new Boolean());

inspect(Boolean('Rob'));
inspect(Boolean(7));
inspect(Boolean(0));
inspect(Boolean('0'));
inspect(Boolean(false));
inspect(Boolean('false'));
inspect(Boolean());
