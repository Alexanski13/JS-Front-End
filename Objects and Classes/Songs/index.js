function solve(input) {
  class Song {
    constructor(type, name, length) {
      this.type = type;
      this.name = name;
      this.length = length;
    }
  }

  const typeToDisplay = input.pop();
  const [_, ...songs] = input;

  songs.map((songAsText) => {
    const [type, name, length] = songAsText.split("_");

    if (type === typeToDisplay || typeToDisplay === "all") {
      console.log(name);
    }
  });
}

solve([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);
