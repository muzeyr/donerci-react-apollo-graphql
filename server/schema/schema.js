const graphql = require('graphql');

const { GraphQLObjectType,
        GraphQLString,
        GraphQLID,
        GraphQLSchema,
        GraphQLNonNull

}= graphql;

const _ = require('lodash');

const Urun = require('../models/urun')
const Kategori = require('../models/kategori') 
const UrunTip = new GraphQLObjectType({
    name: 'Urun',
    fields:()=>({
        id: {type:GraphQLID},
        ad: { type:GraphQLString},
        kategori: {type:KategoriTip,
        resolve(parent,args){
            return Kategori.findById(parent.kategoriId);
        }
        }
    })
});
const KategoriTip = new GraphQLObjectType({
    name: 'Kategori',
    fields:()=>({
        id: {type:GraphQLID},
        ad: { type:GraphQLString},
    })
});


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryTip',
    fields:{
        urun: {
            type:UrunTip,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                return Urun.findById(args.id);
                
            }
        },
        kategori: {
            type: KategoriTip,
            args:{id: {type:GraphQLID}},
            resolve(parent,args){
                    return Kategori.findById(args.id);
            }
        }

    }

});
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields:{
        urunEkle: {
            type: UrunTip,
            args:{
                ad: {type:new GraphQLNonNull(GraphQLString)},
                kategoriId: {type: new GraphQLNonNull(GraphQLID)}
            },
            resolve(parent,args){
                let urun = new Urun({
                    ad: args.ad,
                    kategoriId: args.kategoriId

                })
                return urun.save();
            }

        },
        kategoriEkle: {
            type: KategoriTip,
            args:{
                ad: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parent,args) {
                let kategori = new Kategori({
                    ad: args.ad,
                })
                return kategori.save();
            }
        }
    }

});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})