var mysql = require('./mysql');

function Work(){}

Work.queryList = function(callback){
    mysql.getConnection(function(err, conn){
    	if(err)
    		return callback(err);
    	var sql = 'SELECT lsrc, src, w, h, title, t FROM art_works';
    	conn.query(sql, function(err, rows){
    		if(err)
    			return callback(err);
    		return callback(err, rows);
    	});
    });
};

module.exports = Work;