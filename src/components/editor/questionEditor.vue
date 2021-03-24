<template>
    <div>
        <div class="card" v-for="(issue, issueid) in issues" :key="issueid" style="margin-bottom: 2em">
            <div class="card-header">{{issue}}</div>
            <div class="card-body">
                <div v-for="(value, valueid) in values" :key="valueid" >
                    <div class="row">
                        <div class="col-md-9">
                            <p>
                                <strong>{{value}}</strong><br>
                                <textarea class="form-control" v-model="questions[issueid][valueid].question"></textarea>
                                <input v-model="questions[issueid][valueid].answer" class="form-control">
                                Nahrát obrázek: <input type="file" name="picture" :data-valueid="valueid" :data-issueid="issueid" @change="addPicture">
                                
                            </p>
                        </div>
                        <div class="col-md-3 center picture-tn" v-if="questions[issueid][valueid].picture">
                            <img  :src="questions[issueid][valueid].picture" alt="Obrázek k otázce">
                            <button class="btn btn-danger btn-sm" :data-valueid="valueid" :data-issueid="issueid" @click="deletePicture">Smazat</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    computed: {
        issues() {
            return this.$store.state.issues;
        },
        values() {
            return this.$store.state.values;
        },
        questions() {
            return this.$store.state.questions;
        }
    },
    methods: {
        addPicture (e) {
            var file = e.target.files[0];
            var reader = new FileReader();
            var _this = this;
            var issueid = e.target.dataset.issueid;
            var valueid = e.target.dataset.valueid;
            reader.onloadend = function() {
                _this.$store.commit('addPictureToQuestion', [issueid, valueid, reader.result]);
            }
            reader.readAsDataURL(file);
        },
        deletePicture (e) {
            this.$store.commit('deletePicture', [e.target.dataset.issueid, e.target.dataset.valueid])
        }
    }
}
</script>

<style>
    .picture-tn {
        position: relative;
        text-align: center;
        padding-top: 15px;
    }
    .picture-tn .btn {
        position: absolute;
        bottom: 20px;
        right: 0;
    }

    .picture-tn img {
        max-width: 100%; 
        max-height: 140px
    }
</style>