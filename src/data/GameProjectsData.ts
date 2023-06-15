import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-1", "Coldstar", "img/projects/planet-view.png", 
    `
    <div class="paragraph">
     <strong>Coldstar</strong> is a immersive VR escape room I made with a colleague where the player must repair their ship before it hurtles into the star it orbits.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/9O4_VzIwzgI" title="Coldstar Trailer" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        <ul>
        <li><b>Genre:</b> VR, Puzzle, Horror</li>
        <li><b>Engine:</b> Unity</li>
        <li><b>Team Size:</b> 2</li>
        <li><b>Awards & Recognition:</b> Voted second best escape-room by School of Product Design faculty and students at UC (2023)</li>
        </ul>   
        My Roles and Responsibilities :
        <ul>

        <li>Level Design</li>
        <ul>
        <li>Designed the layout and puzzles of the engine bay, and implemented it into Unity</li>
        </ul>

        <li>3D Modelling</li>
        <ul>
        <li>Utilised Blender to create several key models within Coldstar, including the Engine, Screwdriver, Cold Gun, etc.</li>
        </ul>

        <li>Programming</li>
        <ul>
        <li>Made use of key design patterns to implement several scripts in Coldstar</li>
        </ul>
        </ul>

        <div class="notice">
        Download a free copy on <a href="https://olivercoates1.itch.io/coldstar" target="_blank">itch.io</a>.
        Source code is available on <a href="https://github.com/oliver-coates/Coldstar" target="_blank">GitHub</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="phone-screenshot" src="img/projects/planet-view.png" height=200 width=1068 alt="Cockpit View"/>
        <img class="phone-screenshot" src="img/projects/engine-screenshot.png" height=200 width=1068 alt="Engine Bay"/>


    </div>
    `, "#cd8965", true),


    new ProjectData("project-2", "Hook, Line & Sinker", "img/projects/boat.png", `
    <div class="paragraph">
        <strong>Hook, Line & Sinker</strong> is a VR fitness & rythm game where you swing fishing hooks to catch fish flying towards you
    </div>

    <div class="paragraph">
        <ul>
        <li><b>Genre:</b> VR, Fitness, Rythm</li>
        <li><b>Engine:</b> Unity</li>
        <li><b>Team Size:</b> 1</li>
        </ul>   
    </div>

    <div class="paragraph">
    <div class="notice">
        Source code is available on <a href="https://github.com/kelsodumez/hook-line-and-sinker" target="_blank">GitHub</a>.
    </div>
    </div>

    <div class="paragraph center">
    <img class="pc-screenshot" src="img/projects/boat.png" alt="fish screenshot" />
    </div>
    `, "#5a78af", true),

    new ProjectData("project-3", "Star Jumper", "img/projects/starjumper.png", `
    <div class="paragraph">
        <strong>Star Jumper</strong> is an attempt at using procedural generation that i created with some friends in year 13 of High School
    </div>

    <div class="paragraph">
        <ul>
        <li><b>Genre:</b> Rogue-Like, Hack & Slash</li>
        <li><b>Engine:</b> Unity</li>
        <li><b>Team Size:</b> 3</li>
        </ul>   
    </div>

    <div class="paragraph">
        My Roles and Responsibilities :
        <ul>

        <li>Level Design</li>
        <ul>
        <li>Designed the layout of most of the rooms used in the procedurally generated dungeon</li>
        </ul>

        <li>Programming</li>
        <ul>
        <li>Implemented a primitive form of procedural generation that populated a 2d array with room objects then placed them into the level</li>
        <li>Implemented Enemy AI pathfinding and behaviour</li>
        <li>Implemented basic character controller that allowed player to melee attack and dash 
        </ul>
        </ul>

        <div class="notice">
        Download a free copy on <a href="https://keslo.itch.io/star-jumper" target="_blank">itch.io</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/starjumper.png" alt="screenshot" />

    </div>
    `, "#383838", true),
//     new ProjectData("project-4", "Eugeneable", "img/projects/project-4-icon.png", `
//     <div class="paragraph">
//     <strong>Eugeneable</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
//     <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@neo8iam">NEOSiAM 2020</a>.
//     </div>
    
//     <div class="paragraph">
//         Main features :
//         <ul>
//         <li>Some stuff</li>
//         <li>Some great stuff</li>
//         <li>More awesome stuff</li>
//         <li>And then some</li>
//         </ul>
//     </div>

//     <div class="paragraph">
//         <div class="notice">
//         Windows build available on <a href="https://some.where/nice" target="_blank">itch.io</a>.
//         </div>
//     </div>

//     <div class="paragraph center">
//         <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Eugeneable Screenshot" />
//         <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Eugeneable Screenshot" />
//     </div>
//     `, "#e80fb7"),
// //     new ProjectData("project-5", "Cloud Drew Land", "img/projects/project-5-icon.png", `
// //     <div class="paragraph">
// //         <strong>Cloud Drew Land</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
// //         <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@cottonbro">cottonbro</a>.
// //     </div>
    
// //     <div class="paragraph">
// //         Main features :
// //         <ul>
// //         <li>Some stuff</li>
// //         <li>Some great stuff</li>
// //         <li>More awesome stuff</li>
// //         <li>And then some</li>
// //         </ul>
// //     </div>

// //     <div class="paragraph">
// //         <div class="notice">
// //         Windows build available on <a href="https://some.where/nice" target="_blank">itch.io</a>.
// //         Source code available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.
// //         </div>
// //     </div>

// //     <div class="paragraph center">
// //         <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Cloud Drew Land Screenshot" />
// //         <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Cloud Drew Land Screenshot" />
// //         <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Cloud Drew Land Screenshot" />
// //     </div>`, "#e48246")
];