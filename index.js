var _ = require('underscore');
var util = require('util');
var uglifyJs = require('uglify-js');

function seek_for_global_vars ( code ) {
  var ast = uglifyJs.parse( code );
  ast.figure_out_scope();

  return {
    deps_global_val : _.map(ast.globals._values,function( item ) {
                        return item.name;
                      }),

    exps_global_val : _.map(ast.variables._values,function( item ) {
                        return item.name;
                      })
  };
}

module.exports = seek_for_global_vars;