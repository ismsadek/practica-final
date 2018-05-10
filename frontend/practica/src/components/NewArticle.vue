<!-- Este es el componente Nuevo Artículo, para añadir los nuevos artículos que se escriban.
	Hay que enlazarlo a ¿Firebase? para guardarlos en la base de datos.
	Faltan pequeños detalles por pulir
-->

<template>
	<form>
		<h3>Add a new article:</h3>
		<div class="container">
			<div class="form-group row">
				<label for="" class="col-md-12">Title:</label>
				<div class="col-md-12">
					<input type="text" class="form-control" v-model="newArticle.name">
				</div>
			</div>
			
			<div class="form-group row">
				<label for="" class="col-md-12">Article</label>
					<div class="col-md-12">
						<textarea type="text" name="" id="" class="form-control" rows="5" v-model="newArticle.description"></textarea>
					</div>				
			</div>

			<div class="form-group row">
				<button class="btn btn-success btn-block" type="button" @click="addNewArticle()">Add New Article</button>
			</div>
		</div>
	</form>
</template>

<script>
	
	// Hay que importar firebase aquí

	export default {
		data() {
			return {
				newArticle: {
					  'name': 'Nuevo Artículo',
					  'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum perferendis aut quo aliquam veniam voluptate est quibusdam, corrupti saepe mollitia iusto asperiores adipisci sed cupiditate quas id, quisquam eveniet numquam.',

					}
				}
			},
		methods: {
			addNewArticle() {
				console.log(this.newArticle)
				// cuando esté firebase importado, pushear aquí para que aparezcan los nuevos artículos
			}
		}
	}
</script>