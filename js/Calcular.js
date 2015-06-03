angular.module("Calcular", []).controller("CalcularController", function CalcularController($scope) {
		
		

		
		$scope.onClickCalcular = function() {

			if($scope.sexo=="Masculino"){
			$scope.resultado=parseFloat($scope.altura)-100;
			 $scope.resultado1=(parseFloat($scope.altura)-150)/4;
			$scope.resultado2=(parseFloat($scope.edad)-20)/4;
			$scope.resultado3=$scope.resultado-$scope.resultado1;
				$scope.result = $scope.resultado3+$scope.resultado2;
			}else{
				$scope.resultado=parseFloat($scope.altura)-100;
			 $scope.resultado1=(parseFloat($scope.altura)-150)/2;
			$scope.resultado2=(parseFloat($scope.edad)-20)/2;
			$scope.resultado3=$scope.resultado-$scope.resultado1;
				$scope.result = $scope.resultado3+$scope.resultado2;
			}
				

			
		};
	}
);