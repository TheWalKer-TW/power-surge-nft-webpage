import React, { useRef, useEffect } from 'react'

import "./Error404.scss"

const Error404 = ( ) => {

    const commands = String.raw`samurai@internal-powersurge.io/:~ cd HAX samurai@internal-powersurge.io/HAX/:~ ls`;

    const beep = String.raw`          _____                    _____                    _____                    _____          
*******    *******   **       ** ******** *******      ******** **     ** *******     ********  ********
/**////**  **/////** /**      /**/**///// /**////**    **////// /**    /**/**////**   **//////**/**///// 
/**   /** **     //**/**   *  /**/**      /**   /**   /**       /**    /**/**   /**  **      // /**      
/******* /**      /**/**  *** /**/******* /*******    /*********/**    /**/*******  /**         /******* 
/**////  /**      /**/** **/**/**/**////  /**///**    ////////**/**    /**/**///**  /**    *****/**////  
/**      //**     ** /**** //****/**      /**  //**          /**/**    /**/**  //** //**  ////**/**      
/**       //*******  /**/   ///**/********/**   //**   ******** //******* /**   //** //******** /********
//         ///////   //       // //////// //     //   ////////   ///////  //     //   ////////  //////// 



# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #


 ********                                    **   ****     ** 
/**/////                                    */*  *///**   */* 
/**       ****** ******  ******  ******    * /* /*  */*  * /* 
/******* //**//*//**//* **////**//**//*   ******/* * /* ******
/**////   /** /  /** / /**   /** /** /   /////* /**  /*/////* 
/**       /**    /**   /**   /** /**         /* /*   /*    /* 
/********/***   /***   //****** /***         /* / ****     /* 
//////// ///    ///     //////  ///          /   ////      /  


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

    const ResetTerminal = () => {
        intro.current.innerHTML = '';
        intro.current.style.display = "none";
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
            await DrawLines(beep);
            await TypeString("\n\nSeems you're lost. Page couldn't be found.");
            await Delay(3000);
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

export default Error404
