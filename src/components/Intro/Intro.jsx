import React, { useRef, useEffect } from 'react'

import "./Intro.scss"

const Intro = ({ all }) => {

    const commands = String.raw`samurai@internal-powersurge.com/:~ cd HAX samurai@internal-powersurge.com/HAX/:~ ls`;

    const beep = String.raw`


          _____                    _____                    _____                    _____          
*******    *******   **       ** ******** *******      ******** **     ** *******     ********  ********
/**////**  **/////** /**      /**/**///// /**////**    **////// /**    /**/**////**   **//////**/**///// 
/**   /** **     //**/**   *  /**/**      /**   /**   /**       /**    /**/**   /**  **      // /**      
/******* /**      /**/**  *** /**/******* /*******    /*********/**    /**/*******  /**         /******* 
/**////  /**      /**/** **/**/**/**////  /**///**    ////////**/**    /**/**///**  /**    *****/**////  
/**      //**     ** /**** //****/**      /**  //**          /**/**    /**/**  //** //**  ////**/**      
/**       //*******  /**/   ///**/********/**   //**   ******** //******* /**   //** //******** /********
//         ///////   //       // //////// //     //   ////////   ///////  //     //   ////////  //////// 



# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #`;

    // let blink = document.querySelector('.blink');
    // const code = document.querySelector('.code');

    let blink = useRef(null);
    const code = useRef(null);
    const intro = useRef(null);

    const RandomNumber = (min, max) => {
        return Math.floor(Math.random() * max) + min
    };

    const Delay = (time) => {
        return new Promise((resolve) => setTimeout(resolve, time))
    };

    const DisplayAnything = () => {
        all.current.style.visibility = "hidden";
    }

    const ResetTerminal = () => {
        intro.current.innerHTML = '';
        intro.current.style.display = "none";
        all.current.style.visibility = "visible";
    };

    const RenderString = characters => {
        blink.current.insertAdjacentHTML('beforeBegin', characters);
    };

    const TypeString = async characters => {
        for (const character of characters.split('')) {
            await Delay(RandomNumber(100, 200));
            RenderString(character);
        }
    }

    const DrawLines = async (characters, min = 50, max = 500) => {
        for (const line of characters.split('\n')) {
            await Delay(RandomNumber(min, max));
            RenderString(`${line}\n`);
        }
    }

    const DrawCommands = async commands => {
        for (const line of commands.split('\n')) {
            // Seperate the directory and the command
            const [currentDir, command] = line.split(':~ ');

            // Print the directory, type the command and finish with new line
            RenderString(`${currentDir}:~ `);
            await TypeString(command);
            RenderString('\n');
        }
    }

    useEffect(() => {
        (async () => {
            DisplayAnything();
            console.log(all.current.style)
            await DrawCommands("/:~ ssh samurai@internal-powersurge.com -p 2000");
            await Delay(1000);
            RenderString("samurai@internal-powersurge.com password:");
            await Delay(3000);
            RenderString("\n");
            await DrawCommands(commands);
            // RenderString('\nbeep.js    samurai.js\n\n');
            // await DrawCommands('samurai@internal-powersurge.com/HAX:~ node beep.js');
            await DrawLines(beep);
            await TypeString("\n\nSeems you're not among the sheep after all. Wanna see more? Take a look.");
            await Delay(3000);
            ResetTerminal();
        })();
    }, []);

    return (
        <>
            <div className='scanline'></div>
            <div ref={intro} className='intro'>
                <pre ref={code} className='code'><span ref={blink} className='blink'>█</span></pre>
            </div>
        </>
    )
}

export default Intro
