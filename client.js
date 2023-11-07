try{
Teams.Add("Blue", "Teams/Blue", { b: 1 });
	Teams.Add("Red", "Teams/Red", { r: 1 });
	var blueTeam = Teams.Get("Blue");
	var redTeam = Teams.Get("Red");
	blueTeam.Spawns.SpawnPointsGroups.Add(1);
	redTeam.Spawns.SpawnPointsGroups.Add(2);
	blueTeam.Build.BlocksSet.Value = BuildBlocksSet.Blue;
	redTeam.Build.BlocksSet.Value = BuildBlocksSet.Red;

        
var GameModes = [
        "", "/"/*1*/, "×"/*2*/, "",
        "7"/*4*/, "8"/*5*/, "9"/*6*/, "-"/*7*/,
        "4"/*8*/, "5"/*9*/, "6"/*10*/, "+"/*11*/,
        "1"/*12*/, "2"/*13*/, "3"/*14*/, "="/*15*/,
        "("/*16*/, "0"/*17*/, ")"/*18*/
];
var KleyCode = function(id) {
  return GameModes[id];
}
function KleysEnter(id) {
  if (id != 15) { return function(player) {
      player.Ui.Hint.Value = player.Properties.Get("k").Value += KleyCode(id);
    }
  } else {
    return function(player){ player.Ui.Hint.Value = Math.floor(eval(player.Properties.Get("k").Value))};
  }
}
function Resset() {
  return function(player) {
    player.Ui.Hint.Value = player.Properties.Get("k").Value = "";
  }
}
var one = AreaPlayerTriggerService.Get("One");
one.Tags = ["One"];
one.Enable = true;
one.OnEnter.Add(KleysEnter(12));
var two = AreaPlayerTriggerService.Get("Two");
two.Tags = ["Two"];
two.Enable = true;
two.OnEnter.Add(KleysEnter(13));
var three = AreaPlayerTriggerService.Get("Three");
three.Tags = ["Three"];
three.Enable = true;
three.OnEnter.Add(KleysEnter(14));
var four = AreaPlayerTriggerService.Get("Four");
four.Tags = ["Four"];
four.Enable = true;
four.OnEnter.Add(KleysEnter(8));
var five = AreaPlayerTriggerService.Get("Five");
five.Tags = ["Five"];
five.Enable = true;
five.OnEnter.Add(KleysEnter(9));
var six = AreaPlayerTriggerService.Get("Six");
six.Tags = ["Six"];
six.Enable = true;
six.OnEnter.Add(KleysEnter(10));
var seven = AreaPlayerTriggerService.Get("Seven");
seven.Tags = ["Seven"];
seven.Enable = true;
seven.OnEnter.Add(KleysEnter(4));
var eight = AreaPlayerTriggerService.Get("Eight");
eight.Tags = ["Eight"];
eight.Enable = true;
eight.OnEnter.Add(KleysEnter(5));
var nine = AreaPlayerTriggerService.Get("Nine");
nine.Tags = ["Nine"];
nine.Enable = true;
nine.OnEnter.Add(KleysEnter(6));
var zero = AreaPlayerTriggerService.Get("Zero");
zero.Tags = ["Zero"];
zero.Enable = true;
zero.OnEnter.Add(KleysEnter(17));
var divide = AreaPlayerTriggerService.Get("Divide");
divide.Tags = ["Divide"];
divide.Enable = true;
divide.OnEnter.Add(KleysEnter(2));
var plus = AreaPlayerTriggerService.Get("Plus");
plus.Tags = ["Plus"];
plus.Enable = true;
plus.OnEnter.Add(KleysEnter(11));
var multiply = AreaPlayerTriggerService.Get("Multiply");
multiply.Tags = ["Multiply"];
multiply.Enable = true;
multiply.OnEnter.Add(KleysEnter(1));
var minus = AreaPlayerTriggerService.Get("Minus");
minus.Tags = ["Minus"];
minus.Enable = true;
minus.OnEnter.Add(KleysEnter(7));
var equals = AreaPlayerTriggerService.Get("equals");
equals.Tags = ["Equals"];
equals.Enable = true;
equals.OnEnter.Add(KleysEnter(15));
var leftParenthesis = AreaPlayerTriggerService.Get("leftParenthesis");
leftParenthesis.Tags = ["LeftParenthesis"];
leftParenthesis.Enable = true;
leftParenthesis.OnEnter.Add(KleysEnter(16));
var rightParenthesis = AreaPlayerTriggerService.Get("rightParenthesis");
rightParenthesis.Tags = ["RightParenthesis"];
rightParenthesis.Enable = true;
rightParenthesis.OnEnter.Add(KleysEnter(18));
var resset = AreaPlayerTriggerService.Get("Resset");
resset.Tags = ["Resset"];
resset.Enable = true;
resset.OnEnter.Add(Resset());

var I = Inventory.GetContext();
I.Main.Value = false;
I.Secondary.Value = false;
I.Melee.Value = false;
I.Explosive.Value = false;
I.Build.Value = false;	
        
Teams.OnRequestJoinTeam.Add(function(player,team){
   var pl = player;
   Teams.Get("Red").Add(pl);
   if (pl.id === "7B9AA352FD22A40E"){

    Teams.Get("Blue").Add(pl);
    pl.Build.BlocksSet.Value = BuildBlocksSet.AllClear;
    pl.Build.Pipette.Value = true;
    pl.Build.FloodFill.Value = true;
    pl.Build.FillQuad.Value = true;
    pl.Build.RemoveQuad.Value = true;
    pl.Build.BalkLenChange.Value = true;
    pl.Build.FlyEnable.Value = true;
    pl.Build.QuadChangeEnable.Value = true;
    pl.Build.BuildModeEnable.Value = true;
    pl.Inventory.Main.Value = true;
    pl.Inventory.Secondary.Value = true;
    pl.Inventory.Melee.Value = true;
    pl.Inventory.Explosive.Value = true;
    pl.Inventory.Build.Value = true;
    pl.Inventory.MainInfinity.Value = true;
    pl.Inventory.SecondaryInfinity.Value = true;
    pl.Inventory.ExplosiveInfinity.Value = true;
    pl.Inventory.BuildInfinity.Value = true;
    pl.contextedProperties.MaxHp.Value = 10;
    pl.contextedProperties.SkinType.Value = 2;
    pl.Damage.DamageIn.Value = false;
    pl.Build.CollapseChangeEnable.Value = true;
    pl.Build.RenameMapEnable.Value = true;
    pl.Build.ChangeMapAuthorsEnable.Value = true;
    pl.Build.LoadMapEnable.Value = true;
    pl.Build.ChangeSpawnsEnable.Value = true;
    pl.Build.BuildRangeEnable.Value = true;
    pl.Build.SetSkyEnable.Value = true;
    pl.Build.GenMapEnable.Value = true;
    pl.Build.ChangeCameraPointsEnable.Value = true;
  }
});

Teams.OnPlayerChangeTeam.Add(function(player){ player.Spawns.Spawn()});
}catch(e){
  Ui.getContext().Hint.Value = "Error:" + e.message + ", stack: " + e.stack;
} 
