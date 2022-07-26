export const initialState={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    spotify: null,
    top_artists: null,
    current_playing_item: null,
    // TODO: set to null after development

    // token:"BQDOQX5g49Q19F8tY-LMRazuCibNmXEZLegiRvLFP6bUtXlqEj55htklqvehTKBZvfS62Ps_rSw0CgVo0CBaU15OQdqM9NqYbg0VDRr76oS9kd8J2M1gq4MVQbm-E8xOAMuSiB25OwbTJhY0wKm-Cjnonwy9VAs60gtu1c6ZQAKmLWqm47VCiOnG7xw4O44y97sdxu0weUksadBsLf51",
   token:null,

};

const reducer=(state,action)=>{
    console.log(action);

    // Action has type,[payload]

    switch(action.type){
        case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
      case "SET_CURRENT_TRACK":
        return {
          ...state,
          current_playing_item: action.current_playing_item,
        };
      case "SET_TOP_ARTISTS":
        return {
          ...state,
          top_artists: action.top_artists,
        };
        case "SET_SPOTIFY":
            return {
              ...state,
              spotify: action.spotify,
            };  
        case 'SET_USER':
            return {
                ...state,
                user:action.user,
            };
            case 'SET_TOKEN':
            return {
                ...state,
                token:action.token,
            };
            case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists:action.playlists,
            };
            case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly:action.discover_weekly,
            };
        default:
            return state;
    }
}
export default reducer;