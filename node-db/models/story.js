'use strict';

var connPool;

var Story = {
    //getAll: function() {}
    getAll() {
        var sql = `select * from stories 
            order by votes desc, createdOn desc limit 50`;
        return connPool.queryAsync(sql);
    },
    
    insert(story) {
        //validate data
        var sql = "insert into stories (url) and values (?)";
        var params = [story.url];
        return connPool.queryAsync(sql, params)
            .then(function(results) {
                sql = 'SELECT * FROM stories WHERE id=?';
                params = [results.insertID];
                return connPool.queryAsync(sql, params);
            })
            .then(function(rows) {
                return rows.length > 0 ? rows[0] : null;
            })
    }
};

module.exports.Model = function(connectionPool) {
    connPool = connectionPool;
    return Story;
}

