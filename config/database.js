// This is the path to the database... we don't want any configuration
// information in the main code folders, but we *do* want it in the
// repository for fast deployment.
module.exports = {
    'url'   : 'mongodb://172.31.33.253/athletics_survey_db' // TODO: put the path to your database, such as 'mongodb://100.2.5.6/mydatabase'
};
