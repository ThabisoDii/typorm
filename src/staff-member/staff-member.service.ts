import { Injectable } from '@nestjs/common';
import { CreateStaffMemberDto } from './dto/create-staff-member.dto';
import { UpdateStaffMemberDto } from './dto/update-staff-member.dto';
import { StaffMemberRepositoryService } from './staff-member-repository.service';
import { createObjectCsvWriter } from 'csv-writer';
//import * as openpgp from 'openpgp';
const openpgp = require('openpgp')
import * as fs from 'fs';
import * as csvParser from 'csv-parser';

import SftpClient from "ssh2-sftp-client";




@Injectable()
export class StaffMemberService {



  constructor(private readonly staffMemberRepositoryService: StaffMemberRepositoryService) { }



  create(createStaffMemberDto: CreateStaffMemberDto) {

    return this.staffMemberRepositoryService.insert(createStaffMemberDto)
    // 'This action adds a new staffMember';
  }

  findAll() {
    return `This action returns all staffMember`;
  }

  findOne(id: number) {
    return `This action returns a #${id} staffMember`;
  }

  update(id: number, updateStaffMemberDto: UpdateStaffMemberDto) {
    return `This action updates a #${id} staffMember`;
  }

  remove(id: number) {
    return `This action removes a #${id} staffMember`;
  }

  async encrypt(messageToEncrypt: string) {
    const csvDataToEncyptArray = this.readCsv("test.csv");

    const csvDataToEncyptString = JSON.stringify(csvDataToEncyptArray);

    const key = await this.getKey();
    const publicKeyArmored = await openpgp.readKey({ armoredKey: key })
    const encrypted = await openpgp.encrypt({
      message: await openpgp.createMessage({ text: csvDataToEncyptString }),
      encryptionKeys: publicKeyArmored,
    })

    this.write()
    console.log("en " + encrypted)
  }

  async getKey() {
    const { publicKey } = await openpgp.generateKey({
      curve: 'ed25519',
      userIDs: [
        {
          name: 'Thabiso',
          email: 'thabiso@gmail.com',
          comment: 'tttt',
        },
      ],
      passphrase: '',
      format: 'armored',
    })

    return publicKey;
  }


  async write() {

    const csvWriter = createObjectCsvWriter({
      path: 'test.csv',
      header: [
        { id: 'name', title: 'NAME' },
        { id: 'lang', title: 'LANGUAGE' }
      ]
    });

    const records = [
      { name: 'Bob', lang: 'French, English' },
      { name: 'Mary', lang: 'English' }
    ];

    const file = await csvWriter.writeRecords(records);
    console.log()

  }

  async read() {

    this.readCsv("test.csv")

  }


  async readCsv(filePath: string): Promise<any[]> {
    const results = [];

    return new Promise((resolve, reject) => {
      fs.createReadStream(filePath)
        .pipe(csvParser())
        .on('data', (data) => results.push(data))
        .on('end', () => resolve(results))
        .on('error', (error) => reject(error));
    });
  }


  testing1() {
    const config = {
      host: 'localhost',
      port: 22,
      username: 'admin',
      password: 'admin'
    };

    const sftp = new SftpClient('example-client');

    sftp.connect(config)
      .then(() => {
        return sftp.cwd();
      })
      .then(p => {
        console.log(`Remote working directory is ${p}`);
        return sftp.end();
      })
      .catch(err => {
        console.log(`Error: ${err.message}`); // error message will include 'example-client'
      });


  }





}








