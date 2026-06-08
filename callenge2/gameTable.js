class gametable extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <table>
        <tr>
          <th>
            <div class="game">
              <img
                class="gameImg"
                src="https://cdn2.steamgriddb.com/grid/3413c4203acf09595053fc370850095b.jpg"
                alt=""
              />
              <div class="hourCount">99999999 hours</div>
            </div>
          </th>
          <th>
            <div class="game">
              <img
                class="gameImg"
                src="https://shared.steamstatic.com/store_item_assets/steam/apps/322170/library_600x900_2x.jpg?t=1703005777"
                alt=""
              />
              <div class="hourCount">123 hours</div>
            </div>
          </th>
          <th>
            <div class="game">
              <img
                class="gameImg"
                src="https://cdn2.steamgriddb.com/grid/f43f5a156dfa004bb019756a0c902484.jpg"
                alt=""
              />
              <div class="hourCount">123 hours</div>
            </div>
          </th>
          <th>
            <div class="game">
              <img
                class="gameImg"
                src="https://shared.steamstatic.com/store_item_assets/steam/apps/960090/library_600x900_2x.jpg?t=1753309108"
                alt=""
              />
              <div class="hourCount">123 hours</div>
            </div>
          </th>
          <th>
            <div class="game">
              <img
                class="gameImg"
                src="https://cdn2.steamgriddb.com/grid/7be932c8505aa392c305fafcdac42d2a.png"
                alt=""
              />
              <div class="hourCount">123 hours</div>
            </div>
          </th>
        </tr>

        <tr>
          <th>
            <div class="game">
              <img
                class="gameImg"
                src="https://shared.steamstatic.com/store_item_assets/steam/apps/730/library_600x900_2x.jpg"
                alt="Counter-Strike 2"
              />
              <div class="hourCount">1,420 hours</div>
            </div>
          </th>
          <th>
            <div class="game">
              <img
                class="gameImg"
                src="https://shared.steamstatic.com/store_item_assets/steam/apps/105600/library_600x900_2x.jpg"
                alt="Terraria"
              />
              <div class="hourCount">340 hours</div>
            </div>
          </th>
          <th>
            <div class="game">
              <img
                class="gameImg"
                src="https://shared.steamstatic.com/store_item_assets/steam/apps/1174180/library_600x900_2x.jpg"
                alt="Red Dead Redemption 2"
              />
              <div class="hourCount">185 hours</div>
            </div>
          </th>
          <th>
            <div class="game">
              <img
                class="gameImg"
                src="https://shared.steamstatic.com/store_item_assets/steam/apps/431960/library_600x900_2x.jpg"
                alt="Wallpaper Engine"
              />
              <div class="hourCount">2,110 hours</div>
            </div>
          </th>
          <th>
            <div class="game">
              <img
                class="gameImg"
                src="https://shared.steamstatic.com/store_item_assets/steam/apps/211420/library_600x900_2x.jpg"
                alt="Dark Souls III"
              />
              <div class="hourCount">95 hours</div>
            </div>
          </th>
        </tr>

        <tr>
          <th>
            <div class="game">
              <img
                class="gameImg"
                src="https://shared.steamstatic.com/store_item_assets/steam/apps/1086940/library_600x900_2x.jpg"
                alt="Baldur's Gate 3"
              />
              <div class="hourCount">210 hours</div>
            </div>
          </th>
          <th>
            <div class="game">
              <img
                class="gameImg"
                src="https://shared.steamstatic.com/store_item_assets/steam/apps/413150/library_600x900_2x.jpg"
                alt="Stardew Valley"
              />
              <div class="hourCount">145 hours</div>
            </div>
          </th>
          <th>
            <div class="game">
              <img
                class="gameImg"
                src="https://shared.steamstatic.com/store_item_assets/steam/apps/570/library_600x900_2x.jpg"
                alt="Dota 2"
              />
              <div class="hourCount">3,850 hours</div>
            </div>
          </th>
          <th>
            <div class="game">
              <img
                class="gameImg"
                src="https://shared.steamstatic.com/store_item_assets/steam/apps/252490/library_600x900_2x.jpg"
                alt="Rust"
              />
              <div class="hourCount">1,120 hours</div>
            </div>
          </th>
          <th>
            <div class="game">
              <img
                class="gameImg"
                src="https://shared.steamstatic.com/store_item_assets/steam/apps/1245620/library_600x900_2x.jpg"
                alt="Elden Ring"
              />
              <div class="hourCount">165 hours</div>
            </div>
          </th>
        </tr>

        <tr>
          <th>
            <div class="game">
              <img
                class="gameImg"
                src="https://shared.steamstatic.com/store_item_assets/steam/apps/400/library_600x900_2x.jpg"
                alt="Portal"
              />
              <div class="hourCount">12 hours</div>
            </div>
          </th>
          <th>
            <div class="game">
              <img
                class="gameImg"
                src="https://shared.steamstatic.com/store_item_assets/steam/apps/620/library_600x900_2x.jpg"
                alt="Portal 2"
              />
              <div class="hourCount">45 hours</div>
            </div>
          </th>
          <th>
            <div class="game">
              <img
                class="gameImg"
                src="https://shared.steamstatic.com/store_item_assets/steam/apps/218620/library_600x900_2x.jpg"
                alt="Payday 2"
              />
              <div class="hourCount">520 hours</div>
            </div>
          </th>
          <th>
            <div class="game">
              <img
                class="gameImg"
                src="https://shared.steamstatic.com/store_item_assets/steam/apps/292030/library_600x900_2x.jpg"
                alt="The Witcher 3: Wild Hunt"
              />
              <div class="hourCount">190 hours</div>
            </div>
          </th>
          <th>
            <div class="game">
              <img
                class="gameImg"
                src="https://shared.steamstatic.com/store_item_assets/steam/apps/550/library_600x900_2x.jpg"
                alt="Left 4 Dead 2"
              />
              <div class="hourCount">310 hours</div>
            </div>
          </th>
        </tr>

        <tr>
          <th>
            <div class="game">
              <img
                class="gameImg"
                src="https://shared.steamstatic.com/store_item_assets/steam/apps/381210/library_600x900_2x.jpg"
                alt="Dead by Daylight"
              />
              <div class="hourCount">870 hours</div>
            </div>
          </th>
          <th>
            <div class="game">
              <img
                class="gameImg"
                src="https://shared.steamstatic.com/store_item_assets/steam/apps/230410/library_600x900_2x.jpg"
                alt="Warframe"
              />
              <div class="hourCount">1,340 hours</div>
            </div>
          </th>
          <th>
            <div class="game">
              <img
                class="gameImg"
                src="https://shared.steamstatic.com/store_item_assets/steam/apps/252950/library_600x900_2x.jpg"
                alt="Rocket League"
              />
              <div class="hourCount">960 hours</div>
            </div>
          </th>
          <th>
            <div class="game">
              <img
                class="gameImg"
                src="https://shared.steamstatic.com/store_item_assets/steam/apps/227300/library_600x900_2x.jpg"
                alt="Euro Truck Simulator 2"
              />
              <div class="hourCount">115 hours</div>
            </div>
          </th>
          <th>
            <div class="game">
              <img
                class="gameImg"
                src="https://shared.steamstatic.com/store_item_assets/steam/apps/271590/library_600x900_2x.jpg"
                alt="Grand Theft Auto V"
              />
              <div class="hourCount">640 hours</div>
            </div>
          </th>
        </tr>

        <tr>
          <th>
            <div class="game">
              <img
                class="gameImg"
                src="https://shared.steamstatic.com/store_item_assets/steam/apps/306130/library_600x900_2x.jpg"
                alt="The Elder Scrolls V: Skyrim"
              />
              <div class="hourCount">430 hours</div>
            </div>
          </th>
          <th>
            <div class="game">
              <img
                class="gameImg"
                src="https://shared.steamstatic.com/store_item_assets/steam/apps/444090/library_600x900_2x.jpg"
                alt="Palworld"
              />
              <div class="hourCount">75 hours</div>
            </div>
          </th>
          <th>
            <div class="game">
              <img
                class="gameImg"
                src="https://shared.steamstatic.com/store_item_assets/steam/apps/1593500/library_600x900_2x.jpg"
                alt="God of War"
              />
              <div class="hourCount">48 hours</div>
            </div>
          </th>
          <th>
            <div class="game">
              <img
                class="gameImg"
                src="https://shared.steamstatic.com/store_item_assets/steam/apps/1151640/library_600x900_2x.jpg"
                alt="Horizon Zero Dawn"
              />
              <div class="hourCount">62 hours</div>
            </div>
          </th>
          <th>
            <div class="game">
              <img
                class="gameImg"
                src="https://shared.steamstatic.com/store_item_assets/steam/apps/1145360/library_600x900_2x.jpg"
                alt="Hades"
              />
              <div class="hourCount">130 hours</div>
            </div>
          </th>
        </tr>

        <tr>
          <th>
            <div class="game">
              <img
                class="gameImg"
                src="https://shared.steamstatic.com/store_item_assets/steam/apps/582010/library_600x900_2x.jpg"
                alt="Monster Hunter: World"
              />
              <div class="hourCount">380 hours</div>
            </div>
          </th>
          <th>
            <div class="game">
              <img
                class="gameImg"
                src="https://shared.steamstatic.com/store_item_assets/steam/apps/782330/library_600x900_2x.jpg"
                alt="Doom Eternal"
              />
              <div class="hourCount">55 hours</div>
            </div>
          </th>
          <th>
            <div class="game">
              <img
                class="gameImg"
                src="https://shared.steamstatic.com/store_item_assets/steam/apps/646570/library_600x900_2x.jpg"
                alt="Slay the Spire"
              />
              <div class="hourCount">240 hours</div>
            </div>
          </th>
          <th>
            <div class="game">
              <img
                class="gameImg"
                src="https://shared.steamstatic.com/store_item_assets/steam/apps/394360/library_600x900_2x.jpg"
                alt="Hearts of Iron IV"
              />
              <div class="hourCount">610 hours</div>
            </div>
          </th>
          <th>
            <div class="game">
              <img
                class="gameImg"
                src="https://shared.steamstatic.com/store_item_assets/steam/apps/289070/library_600x900_2x.jpg"
                alt="Sid Meier's Civilization VI"
              />
              <div class="hourCount">490 hours</div>
            </div>
          </th>
        </tr>

        <tr>
          <th>
            <div class="game">
              <img
                class="gameImg"
                src="https://shared.steamstatic.com/store_item_assets/steam/apps/242760/library_600x900_2x.jpg"
                alt="The Forest"
              />
              <div class="hourCount">85 hours</div>
            </div>
          </th>
          <th>
            <div class="game">
              <img
                class="gameImg"
                src="https://shared.steamstatic.com/store_item_assets/steam/apps/264710/library_600x900_2x.jpg"
                alt="Subnautica"
              />
              <div class="hourCount">70 hours</div>
            </div>
          </th>
          <th>
            <div class="game">
              <img
                class="gameImg"
                src="https://shared.steamstatic.com/store_item_assets/steam/apps/311210/library_600x900_2x.jpg"
                alt="Call of Duty: Black Ops III"
              />
              <div class="hourCount">215 hours</div>
            </div>
          </th>
          <th>
            <div class="game">
              <img
                class="gameImg"
                src="https://shared.steamstatic.com/store_item_assets/steam/apps/236430/library_600x900_2x.jpg"
                alt="Dark Souls II"
              />
              <div class="hourCount">110 hours</div>
            </div>
          </th>
          <th>
            <div class="game">
              <img
                class="gameImg"
                src="https://shared.steamstatic.com/store_item_assets/steam/apps/374320/library_600x900_2x.jpg"
                alt="Dark Souls: Remastered"
              />
              <div class="hourCount">65 hours</div>
            </div>
          </th>
        </tr>

        <tr>
          <th>
            <div class="game">
              <img
                class="gameImg"
                src="https://shared.steamstatic.com/store_item_assets/steam/apps/252490/library_600x900_2x.jpg"
                alt="Rust"
              />
              <div class="hourCount">1,890 hours</div>
            </div>
          </th>
          <th>
            <div class="game">
              <img
                class="gameImg"
                src="https://shared.steamstatic.com/store_item_assets/steam/apps/534380/library_600x900_2x.jpg"
                alt="Dying Light 2 Stay Human"
              />
              <div class="hourCount">90 hours</div>
            </div>
          </th>
          <th>
            <div class="game">
              <img
                class="gameImg"
                src="https://shared.steamstatic.com/store_item_assets/steam/apps/1091500/library_600x900_2x.jpg"
                alt="Cyberpunk 2077"
              />
              <div class="hourCount">140 hours</div>
            </div>
          </th>
          <th>
            <div class="game">
              <img
                class="gameImg"
                src="https://shared.steamstatic.com/store_item_assets/steam/apps/632360/library_600x900_2x.jpg"
                alt="Risk of Rain 2"
              />
              <div class="hourCount">175 hours</div>
            </div>
          </th>
          <th>
            <div class="game">
              <img
                class="gameImg"
                src="https://shared.steamstatic.com/store_item_assets/steam/apps/359550/library_600x900_2x.jpg"
                alt="Tom Clancy's Rainbow Six Siege"
              />
              <div class="hourCount">1,260 hours</div>
            </div>
          </th>
        </tr>

        <tr>
          <th>
            <div class="game">
              <img
                class="gameImg"
                src="https://shared.steamstatic.com/store_item_assets/steam/apps/1172470/library_600x900_2x.jpg"
                alt="Apex Legends"
              />
              <div class="hourCount">820 hours</div>
            </div>
          </th>
          <th>
            <div class="game">
              <img
                class="gameImg"
                src="https://shared.steamstatic.com/store_item_assets/steam/apps/1222680/library_600x900_2x.jpg"
                alt="Need for Speed Heat"
              />
              <div class="hourCount">45 hours</div>
            </div>
          </th>
          <th>
            <div class="game">
              <img
                class="gameImg"
                src="https://shared.steamstatic.com/store_item_assets/steam/apps/2050650/library_600x900_2x.jpg"
                alt="Resident Evil 4"
              />
              <div class="hourCount">55 hours</div>
            </div>
          </th>
          <th>
            <div class="game">
              <img
                class="gameImg"
                src="https://shared.steamstatic.com/store_item_assets/steam/apps/1817070/library_600x900_2x.jpg"
                alt="Marvel’s Spider-Man Remastered"
              />
              <div class="hourCount">38 hours</div>
            </div>
          </th>
          <th>
            <div class="game">
              <img
                class="gameImg"
                src="https://shared.steamstatic.com/store_item_assets/steam/apps/1817140/library_600x900_2x.jpg"
                alt="Marvel's Spider-Man: Miles Morales"
              />
              <div class="hourCount">22 hours</div>
            </div>
          </th>
        </tr>
      </table>
        
        `;
  }
}

customElements.define("game-table", gametable);
