import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar } from '../utils/appSlice';
import { YOU_TUBE_SEARCH_SUGGESTION } from '../utils/constants';
import { setSearch } from '../utils/searchSlice';

const Head = () => {
    const [searchInput, setSearchInput] = useState("")
    const [sugesstionList, setSugesstionList] = useState([]);
    const [showSuggestion, setShowSuggestion] = useState(false)

    const dispatch = useDispatch();
    function handleSidebar() {
        dispatch(toggleSidebar())
    }

    const chacedSearchInput = useSelector((state) => state.search);

    const getSearchSuggestions = async (input) => {
        if (input) {
            const APIData = await fetch(YOU_TUBE_SEARCH_SUGGESTION + input)
            const jsonData = await APIData.json();
            setSugesstionList(jsonData[1])
            dispatch(setSearch({[input] : jsonData[1]}))
        }
    }


    useEffect(() => {
        const time = setTimeout(() => {
            if (chacedSearchInput[searchInput]) {
                setSugesstionList(chacedSearchInput[searchInput])
            } else {
                getSearchSuggestions(searchInput)
            }
        }, 200);

        return () => {
            clearTimeout(time);
        }
    }, [searchInput])

    return (
        <div className="grid grid-flow-col pt-2 pb-1 sticky top-0 bg-white">
            <div className="flex p-2 col-span-1">
                <img
                    onClick={() => handleSidebar()}
                    className="cursor-pointer h-9 -mt-2 mx-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAWlBMVEXz9fQzMzMqKir3+fixs7J+fn76/Ps2Njbq6uogIiEgICD19/by9PP7/fwlJSXu8O9pamqeoJ+Tk5PLzcxcXFwYFxgMDg1CQ0Ld3d2kpqVLTUw1ODcYGhkODw8+TbZ+AAABM0lEQVR4nO3bWW7DMAwFQNtqUydK4ux773/N5gj9oQkoMwcw8CDJBCSy6wAAAAAAAAAAAAAAAAAAAAAAmF8t0WpywPXxK9ZxnRtxPJ1Xsc6nMTFi3ey2fbTtbpOXsJsu4QH7/jLlLWIdZ0mYuU031yE84HDN3KXlOGyHWNvhWBITduV2+I51uJV1ZsKuLqIlV3wAAACgFTX0lqHGfv4/FtMYa0p+min3x/Mn0PP5uGdGXC/25/Ab4dc+8b60llV4wL5fZiZs/t1irjVMPIhllnO4yAv4Llf3R+Sv9O1xzy2JtbReD+O1ng8AAACYSd003l86S49wasDm+7yb79X/gHeL6XeOhIkzM137c091PL2WsV6ps2vzzB8mP1w0P0MKAAAAAAAAAAAAAAAAAAAAAPCh/gCmZy+HEE0S5QAAAABJRU5ErkJggg==" alt="menu" srcset="" />
                <a href='http://localhost:3000/'><img className='h-5 mx-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwGODoCWG12sFLdictA7wnOcoGgY0wjzZd9g&usqp=CAU" alt="youtube-logo" srcset="" /></a>
            </div>
            <div className='col-span-10 ml-40'>
                <input
                    onChange={(e) => setSearchInput(e.target.value)}
                    className=" w-[35rem] border border-gray-300 focus:border-blue-500 px-4 py-2 rounded-l-full outline-none placeholder:font-medium"
                    placeholder='Search'
                    type="text"
                    onFocus={() => setShowSuggestion(true)}
                    onBlur={() => setShowSuggestion(false)}
                />
                <button className="border border-l-0 border-gray-300 px-2 py-2 rounded-r-full bg-gray-50 hover:bg-gray-200" type="button">SEARCH</button>
                {
                    showSuggestion && searchInput.length > 0 ? <ul className='fixed py-5 bg-white rounded-lg w-[33rem] shadow-lg border border-gray-100'>
                        {sugesstionList.map((item, index) => (
                            <li key={index} className='py-1 pl-4 hover:bg-gray-100 font-medium flex'>
                                <img className='h-4 mt-1 mr-2' src="https://cdn-icons-png.flaticon.com/256/3917/3917132.png" alt="" srcset="" />{item}
                            </li>
                        ))}
                    </ul> : null
                }

            </div>
            <div className='py-1 col-span-1'>
                <img className='h-8 pr-10 ml-auto' src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png" alt="user" srcset="" />
            </div>
        </div>
    )
}

export default Head