declare module 'libsignal/src/crypto' {
	export function encrypt(
		key: Buffer | Uint8Array,
		data: Buffer | Uint8Array,
		iv: Buffer | Uint8Array
	): Promise<Buffer>
	
	export function decrypt(
		key: Buffer | Uint8Array,
		data: Buffer | Uint8Array,
		iv: Buffer | Uint8Array
	): Promise<Buffer>
	
	export function calculateMAC(
		key: Buffer | Uint8Array,
		data: Buffer | Uint8Array
	): Uint8Array
	
	export function deriveSecrets(
		input: Buffer | Uint8Array,
		salt: Buffer | Uint8Array,
		info: Buffer | Uint8Array,
		chunks?: number
	): Buffer[]
}

declare module 'libsignal/src/curve' {
	export interface KeyPair {
		pubKey: Buffer
		privKey: Buffer
	}
	
	export function generateKeyPair(): KeyPair
	
	export function calculateSignature(
		privateKey: Buffer | Uint8Array,
		message: Buffer | Uint8Array
	): Buffer
	
	export function verifySignature(
		publicKey: Buffer | Uint8Array,
		message: Buffer | Uint8Array,
		signature: Buffer | Uint8Array
	): boolean
	
	export function calculateAgreement(
		publicKey: Buffer | Uint8Array,
		privateKey: Buffer | Uint8Array
	): Buffer
}
