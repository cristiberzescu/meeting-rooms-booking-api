import { NextFunction, Request,Response } from "express";
import { validationResult} from "express-validator";

import { RoomsService } from "../service/rooms.service";

const roomService = new RoomsService();

export class RoomController {
    async getRooms(req:Request, res:Response, next:NextFunction){
        const result = validationResult(req);
        if(result.isEmpty()){
        if(req.params.id !== ""){
            try{
            const room = await roomService.GetRoomById(Number(req.params.id));
            res.json(room);
            }
            catch(err){
                console.error(err);
                res.status(500).json({message: "Internal server problems!"});
            }
        }}
        else{
            try{
            const rooms = await roomService.GeetAllRooms();
            res.json(rooms);}
            catch(err){
                console.error(err);
                res.status(500).json({message: "Internal server problems!"});
            }
        }
    }

    async postRoom(req:Request, res:Response, next:NextFunction){
        try{
            roomService.CreateRoom(req.body);
            console.log(req.body);
            res.json(req.body);
        }
        catch(err){
            console.error(err);
            res.status(500).json({message: "Internal server problems!"});
        }
    };

    async putRoom(req:Request, res:Response, next:NextFunction){
        const result = validationResult(req);
        if(result.isEmpty()){
            try{
                roomService.UpdateRoomById(Number(req.params.id), req.body);
                res.send("Object updated!");
            }
            catch(err){
                console.error(err);
                res.status(500).json({message: "Internal server problems!"});
            }
        }
        else{
         res.send({errors: result.array()});
    }
    };

    async deleteRoom(req:Request, res:Response, next:NextFunction){
        const result = validationResult(req);
        if(result.isEmpty()){
            roomService.DeleteRoomById(Number(req.params.id));
            
        }
        res.send({errors: result.array()});
    };
}